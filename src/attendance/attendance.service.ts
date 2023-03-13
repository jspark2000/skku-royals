import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException
} from '@nestjs/common'
import { GoogleSheet, Location } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { AttendanceCheckDTO } from './dto/attendanceCheck.dto'
import { AttendanceDateDTO } from './dto/attendanceDate.dto'
import { AttendanceDeleteDTO } from './dto/attendanceDelete.dto'
import { RegisterAttendancesDTO } from './dto/attendanceRegister.dto'

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
      take: 10,
      distinct: ['date']
    })

    if (result.length === 0) {
      throw new HttpException(
        '불러올 출석 명단이 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY
      )
    }

    return result
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
        HttpStatus.UNPROCESSABLE_ENTITY
      )
    }

    const attendances = await this.prismaService.attendance.findMany({
      where: {
        date: attendanceDTO.date,
        People: {
          absence: false
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
            defPosition: true
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
        actual: attendance.actual
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
      throw new UnprocessableEntityException(
        '해당 출석 정보가 존재하지 않습니다.'
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

  async issueDailyReport(date: string) {
    const target = new Date(date)

    const vaild = await this.prismaService.attendance.findMany({
      where: {
        date: target,
        People: {
          absence: false
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
