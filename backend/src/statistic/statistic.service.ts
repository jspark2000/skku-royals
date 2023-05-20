import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { Attendance, AttendanceStatus, Location, People } from '@prisma/client'
import { Positions } from 'src/common/enums/position.enum'
import { PrismaService } from 'src/prisma/prisma.service'
import { GetAttendanceStatisticsDTO } from './dto/getAttendanceStatistics.dto'

@Injectable()
export class StatisticService {
  constructor(private readonly prismaService: PrismaService) {}

  async getDailyPositionCounts(date: string) {
    const target = new Date(date)

    const valid = await this.prismaService.attendance.findFirst({
      where: {
        date: target,
        People: {
          attendanceTarget: true
        }
      },
      select: {
        id: true
      }
    })

    if (!valid) {
      throw new HttpException(
        { message: '해당하는 날짜의 출석 정보가 없습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    const countOffense: {
      location: Location
      position: string
      newbie: boolean
      count: number
    }[] = await this.prismaService.$queryRawUnsafe(`
      SELECT location, "offPosition" as position, newbie, count(*)::int FROM (SELECT R.location, R.survey, P."offPosition", P."defPosition", P.newbie, P."attendanceTarget"
      FROM (SELECT uid, location, survey
            FROM "Attendance"
            WHERE date = '${date}') as R
              LEFT JOIN "People" P on P.uid = R.uid) as N
      WHERE N."attendanceTarget"=true AND survey<>'Absent'
      GROUP BY location, "offPosition", newbie
      ORDER BY location, "offPosition", newbie;
    `)

    if (countOffense.length === 0) {
      throw new NotFoundException('해당하는 날짜의 출석 정보가 없습니다')
    }

    const countDefense: {
      location: Location
      position: string
      newbie: boolean
      count: number
    }[] = await this.prismaService.$queryRawUnsafe(`
      SELECT location, "defPosition" as position, newbie, count(*)::int FROM (SELECT R.location, R.survey, P."offPosition", P."defPosition", P.newbie, P."attendanceTarget"
      FROM (SELECT uid, location, survey
            FROM "Attendance"
            WHERE date = '${date}') as R
              LEFT JOIN "People" P on P.uid = R.uid) as N
      WHERE N."attendanceTarget"=true AND survey<>'Absent'
      GROUP BY location, "defPosition", newbie
      ORDER BY location, "defPosition", newbie;
    `)

    if (countDefense.length === 0) {
      throw new NotFoundException('해당하는 날짜의 출석 정보가 없습니다')
    }

    const positionCount = countOffense.concat(countDefense)

    const result: {
      position: string
      location: Location
      current: number
      newbie: number
    }[] = []

    Object.keys(Positions).forEach((position) =>
      Object.keys(Location).forEach((location) => {
        result.push({
          position,
          location: Location[location],
          current:
            positionCount
              .filter(
                (item) =>
                  item.location === Location[location] &&
                  !item.newbie &&
                  item.position === position
              )
              .pop()?.count ?? 0,
          newbie:
            positionCount
              .filter(
                (item) =>
                  item.location === Location[location] &&
                  item.newbie &&
                  item.position === position
              )
              .pop()?.count ?? 0
        })
      })
    )

    result
      .filter((item) => item.location === Location.Integrated)
      .forEach((item) => {
        item.current =
          item.current +
          result.filter(
            (target) =>
              target.position === item.position &&
              target.location === Location.Seoul
          )[0].current +
          result.filter(
            (target) =>
              target.position === item.position &&
              target.location === Location.Suwon
          )[0].current

        item.newbie =
          item.newbie +
          result.filter(
            (target) =>
              target.position === item.position &&
              target.location === Location.Seoul
          )[0].newbie +
          result.filter(
            (target) =>
              target.position === item.position &&
              target.location === Location.Suwon
          )[0].newbie
      })

    return result
  }

  async issueDailySurveyReport(date: string) {
    const target = new Date(date)

    const valid = await this.prismaService.attendance.findMany({
      where: {
        date: target,
        People: {
          attendanceTarget: true
        }
      },
      select: {
        id: true
      }
    })

    if (valid.length === 0) {
      throw new HttpException(
        { message: '해당하는 날짜의 출석 정보가 없습니다', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }
    const attendances = await this.prismaService.attendance.findMany({
      where: {
        date: target,
        People: {
          attendanceTarget: true
        }
      },
      select: {
        People: {
          select: {
            name: true,
            studentNo: true,
            newbie: true,
            offPosition: true,
            defPosition: true,
            Injury: {
              where: {
                AND: [
                  { startDate: { lte: new Date(date) } },
                  { endDate: { gte: new Date(date) } }
                ]
              }
            }
          }
        },
        survey: true,
        location: true,
        reason: true
      },
      orderBy: [
        {
          People: {
            newbie: 'asc'
          }
        },
        {
          People: {
            studentNo: 'asc'
          }
        },
        {
          People: {
            name: 'asc'
          }
        }
      ]
    })

    return attendances.map((attendance) => {
      return {
        name: attendance.People.name,
        studentNo: attendance.People.studentNo,
        newbie: attendance.People.newbie,
        offPosition: attendance.People.offPosition,
        defPosition: attendance.People.defPosition,
        location:
          attendance.location === Location.Integrated
            ? '통합'
            : attendance.location === Location.Seoul
            ? '명륜'
            : '율전',
        survey:
          attendance.survey === 'Absent'
            ? 'X'
            : attendance.survey === 'Tardy'
            ? '늦참'
            : 'O',
        staff: attendance.People.offPosition === 'STAFF' ? true : false,
        reason: attendance.reason,
        injured: attendance.People.Injury.length > 0 ? 'O' : 'X'
      }
    })
  }

  async issueDailyReport(date: string) {
    const target = new Date(date)

    const vaild = await this.prismaService.attendance.findMany({
      where: {
        date: target,
        People: {
          attendanceTarget: true
        },
        checked: false
      },
      select: {
        id: true
      }
    })

    if (vaild.length > 0) {
      throw new HttpException(
        { message: '아직 출석체크가 완료되지 않았습니다.', code: 100 },
        HttpStatus.BAD_REQUEST
      )
    }

    const attendances = await this.prismaService.attendance.findMany({
      where: {
        date: target,
        People: {
          attendanceTarget: true
        },
        checked: true
      },
      select: {
        People: {
          select: {
            name: true,
            studentNo: true,
            newbie: true,
            offPosition: true
          }
        },
        survey: true,
        location: true,
        actual: true
      },
      orderBy: [
        {
          People: {
            newbie: 'asc'
          }
        },
        {
          People: {
            studentNo: 'asc'
          }
        },
        {
          People: {
            name: 'asc'
          }
        }
      ]
    })

    return attendances.map((attendance) => {
      return {
        name: attendance.People.name,
        studentNo: attendance.People.studentNo,
        newbie: attendance.People.newbie ? '신입생' : '재학생',
        location:
          attendance.location === Location.Integrated
            ? '통합'
            : attendance.location === Location.Seoul
            ? '명륜'
            : '율전',
        survey:
          attendance.survey === 'Absent'
            ? 'X'
            : attendance.survey === 'Tardy'
            ? '늦참'
            : 'O',
        result:
          attendance.actual === 'Absent'
            ? 'X'
            : attendance.actual === 'Tardy'
            ? '늦참'
            : 'O',
        staff: attendance.People.offPosition === 'STAFF' ? true : false
      }
    })
  }

  async getPeopleAttendanceStatistics(
    statisticDTO: GetAttendanceStatisticsDTO
  ) {
    const attendances = await this.prismaService.attendance.findMany({
      where: {
        AND: [
          {
            date: { gte: statisticDTO.start }
          },
          {
            date: { lte: statisticDTO.end }
          }
        ],
        People: {
          attendanceTarget: true
        }
      },
      select: {
        uid: true,
        actual: true
      }
    })

    const people = await this.prismaService.people.findMany({
      where: {
        attendanceTarget: true
      },
      select: {
        uid: true,
        name: true,
        studentNo: true,
        newbie: true,
        offPosition: true,
        defPosition: true
      },
      orderBy: [{ newbie: 'asc' }, { studentNo: 'asc' }, { name: 'asc' }]
    })

    return people.map((target) => {
      const targetAttendances = attendances.filter(
        (attendance) => attendance.uid === target.uid
      )
      const absent =
        targetAttendances.filter(
          (attendance) => attendance.actual === AttendanceStatus.Absent
        ).length ?? 0
      const present =
        targetAttendances.filter(
          (attendance) =>
            attendance.actual !== AttendanceStatus.Absent && attendance.actual
        ).length ?? 0

      return {
        absent,
        present,
        total: targetAttendances.length,
        notChecked: targetAttendances.length - absent - present,
        percentage: (present * 100.0) / (absent + present),
        ...target
      }
    })
  }

  async getIndividualAttendanceStatistics(id: number) {
    const year = new Date().getFullYear()

    const peopleInfo: People = await this.prismaService.people.findFirst({
      where: {
        id
      }
    })

    const attendances: Attendance[] =
      await this.prismaService.attendance.findMany({
        where: {
          AND: [
            {
              date: { gte: new Date(`${year}-01-01`) }
            }
          ],
          People: {
            id,
            attendanceTarget: true
          }
        },
        orderBy: {
          date: 'desc'
        }
      })

    if (attendances.length === 0) {
      throw new HttpException(
        { message: '해당하는 부원의 출석 정보가 없습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    const total = attendances.length
    const absent =
      attendances.filter(
        (attendance) => attendance.actual === AttendanceStatus.Absent
      ).length ?? 0
    const present =
      attendances.filter(
        (attendance) =>
          attendance.actual !== AttendanceStatus.Absent && attendance.actual
      ).length ?? 0

    return {
      statistic: {
        total,
        absent,
        present,
        notChecked: total - absent - present,
        percentage: (present * 100.0) / (absent + present)
      },
      attendances,
      peopleInfo
    }
  }
}
