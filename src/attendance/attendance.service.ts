import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common'
import { Attendance, GoogleSheet, Location } from '@prisma/client'
import { Positions } from 'src/common/enums/position.enum'
import { PrismaService } from 'src/prisma/prisma.service'
import { AttendanceCheckDTO } from './dto/attendanceCheck.dto'
import { AttendanceDateDTO } from './dto/attendanceDate.dto'
import { AttendanceDeleteDTO } from './dto/attendanceDelete.dto'
import { RegisterAttendancesDTO } from './dto/attendanceRegister.dto'
import { AttendanceUpdateDTO } from './dto/attendanceUpdate.dto'

@Injectable()
export class AttendanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAttendanceDateList() {
    const result = await this.prismaService.attendance.findMany({
      select: {
        date: true,
        isGame: true
      },
      orderBy: {
        date: 'desc'
      },
      take: 25,
      distinct: ['date']
    })

    if (result.length === 0) {
      throw new HttpException(
        '불러올 출석 명단이 없습니다.',
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async getCurrentAttendances(): Promise<
    (Attendance & { People: { name: string; studentNo: number } })[]
  > {
    const dates = await this.prismaService.attendance
      .findMany({
        select: {
          date: true
        },
        orderBy: {
          date: 'desc'
        },
        take: 8,
        distinct: ['date']
      })
      .then((results) => results.map((result) => result.date))

    return await this.prismaService.attendance.findMany({
      where: {
        date: {
          in: dates
        }
      },
      include: {
        People: {
          select: {
            name: true,
            studentNo: true
          }
        }
      },
      orderBy: [
        {
          date: 'desc'
        },
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
  }

  async updateAttendance(
    attendanceDTO: AttendanceUpdateDTO
  ): Promise<Attendance> {
    return await this.prismaService.attendance.update({
      where: {
        id: attendanceDTO.id
      },
      data: {
        ...attendanceDTO
      }
    })
  }

  async getAttendances(attendanceDTO: AttendanceDateDTO) {
    const attendanceExist = await this.prismaService.attendance.findFirst({
      where: {
        date: attendanceDTO.date
      }
    })

    if (!attendanceExist) {
      throw new HttpException(
        '해당하는 날짜의 출석 정보가 없습니다.',
        HttpStatus.NOT_FOUND
      )
    }

    const attendances = await this.prismaService.attendance.findMany({
      where: {
        date: attendanceDTO.date,
        People: {
          attendanceTarget: true
        }
      },
      select: {
        id: true,
        date: true,
        location: true,
        survey: true,
        reason: true,
        checked: true,
        actual: true,
        People: {
          select: {
            name: true,
            studentNo: true,
            offPosition: true,
            defPosition: true,
            newbie: true,
            Injury: {
              where: {
                AND: [
                  { startDate: { lte: attendanceDTO.date } },
                  { endDate: { gte: attendanceDTO.date } }
                ]
              }
            }
          }
        }
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
        id: attendance.id,
        date: attendance.date,
        location: attendance.location,
        survey: attendance.survey,
        checked: attendance.checked,
        reason: attendance.reason,
        name: attendance.People.name,
        studentNo: attendance.People.studentNo,
        offPosition: attendance.People.offPosition,
        defPosition: attendance.People.defPosition,
        actual: attendance.actual,
        newbie: attendance.People.newbie,
        injured: attendance.People.Injury.length > 0 ? true : false
      }
    })
  }

  async getGoogleSheetList(): Promise<GoogleSheet[]> {
    const googleSheetList = await this.prismaService.googleSheet.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc'
      }
    })

    if (googleSheetList.length === 0) {
      throw new UnprocessableEntityException(
        '불러올 GoogleSheet 정보가 없습니다.'
      )
    }

    return googleSheetList
  }

  async registerAttendances(
    attendanceDTO: RegisterAttendancesDTO
  ): Promise<{ count: number }> {
    attendanceDTO.attendances.forEach(
      (attendance) => (attendance.date = new Date(attendance.date))
    )
    let count = 0

    for (let i = 0; i < attendanceDTO.attendances.length; i++) {
      const attendance = attendanceDTO.attendances[i]
      const uid = await this.prismaService.people.findUnique({
        where: {
          name_studentNo: {
            name: attendance.name,
            studentNo: attendance.studentNo
          }
        },
        select: {
          uid: true
        }
      })

      if (uid) {
        const result = await this.prismaService.attendance.upsert({
          where: {
            uid_date: {
              uid: uid.uid,
              date: attendance.date
            }
          },
          create: {
            People: {
              connect: {
                uid: uid.uid
              }
            },
            date: attendance.date,
            location: Location[attendance.location],
            survey: attendance.survey,
            checked: false,
            reason: attendance.reason
          },
          update: {
            location: Location[attendance.location],
            survey: attendance.survey
          }
        })

        if (result) {
          count++
        }
      }
    }
    return { count }
  }

  async checkAttendance(attendanceDTO: AttendanceCheckDTO) {
    const result = await this.prismaService.attendance.update({
      where: {
        id: attendanceDTO.id
      },
      data: {
        location: Location[attendanceDTO.location],
        actual: attendanceDTO.actual,
        checked: true
      },
      select: {
        id: true
      }
    })

    if (!result) {
      throw new HttpException(
        { message: '해당하는 부원의 출석 정보가 없습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async deleteAttendances(
    attendanceDTO: AttendanceDeleteDTO
  ): Promise<{ count: number }> {
    const result = await this.prismaService.attendance.deleteMany({
      where: {
        date: attendanceDTO.date
      }
    })

    return result
  }

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
      throw new NotFoundException('해당하는 날짜의 출석 정보가 없습니다')
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
            defPosition: true
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
        reason: attendance.reason
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
      throw new BadRequestException('아직 출석체크가 완료되지 않았습니다.')
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
}
