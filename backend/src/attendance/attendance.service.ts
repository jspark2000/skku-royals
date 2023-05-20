import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Attendance, Location } from '@prisma/client'
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
            survey: attendance.survey,
            reason: attendance.reason
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
}
