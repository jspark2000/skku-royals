import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Attendance, Survey, SurveyGroup } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { NotSubmittedDTO } from './dto/notSubmitted.dto'
import { RegisterSeparateSurveyDTO } from './dto/registerSeparateSurvey.dto'
import { registerSurveysDTO } from './dto/registerSurveys.dto'
import { SubmitSurveyDTO } from './dto/submitSurvey.dto'
import { UpdateSurveySubmitDTO } from './dto/updateSurveySubmit.dto'

@Injectable()
export class SurveyService {
  KR_DIFF: number = 9 * 60 * 60 * 1000

  constructor(private readonly prismaService: PrismaService) {}

  async getSurveyGroupList(): Promise<SurveyGroup[]> {
    return await this.prismaService.surveyGroup.findMany({
      orderBy: { id: 'desc' },
      take: 10
    })
  }

  async getSurveyModal(id: number): Promise<Survey[]> {
    return await this.prismaService.surveyGroup
      .findUniqueOrThrow({
        where: { id },
        select: {
          surveys: {
            select: {
              id: true,
              date: true,
              type: true,
              groupId: true
            },
            orderBy: { date: 'asc' }
          }
        }
      })
      .then((result) => result.surveys)
  }

  async submitSurveys(surveyDTO: SubmitSurveyDTO): Promise<{ count: number }> {
    const user = await this.prismaService.people.findUnique({
      where: { studentId: surveyDTO.studentId },
      select: {
        uid: true
      }
    })

    if (!user) {
      throw new HttpException(
        { message: '존재하지 않는 부원입니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    const { surveys } = surveyDTO
    let count = 0

    for (let i = 0; i < surveys.length; i++) {
      const result = await this.prismaService.attendance.upsert({
        where: {
          uid_date: {
            uid: user.uid,
            date: surveys[i].date
          }
        },
        create: {
          uid: user.uid,
          date: surveys[i].date,
          survey: surveys[i].survey,
          reason: surveys[i].reason
        },
        update: {
          survey: surveys[i].survey,
          reason: surveys[i].reason
        },
        select: {
          id: true
        }
      })

      if (result) count++
    }

    return { count }
  }

  async registerSurveys(surveyDTO: registerSurveysDTO): Promise<SurveyGroup> {
    const dates: Date[] = surveyDTO.surveys.map((survey) => survey.date)

    const check = await this.prismaService.survey.findMany({
      where: {
        date: {
          in: dates
        }
      }
    })

    if (check.length !== 0) {
      throw new HttpException(
        { message: '중복되는 출석조사가 존재합니다.', code: 100 },
        HttpStatus.CONFLICT
      )
    }

    return await this.prismaService.surveyGroup.create({
      data: {
        name: surveyDTO.name,
        surveys: {
          createMany: {
            data: surveyDTO.surveys
          }
        }
      }
    })
  }

  async deleteSurveys(id: number): Promise<SurveyGroup> {
    return await this.prismaService.surveyGroup.delete({
      where: {
        id
      }
    })
  }

  async getNotSubmittedList(id: number): Promise<NotSubmittedDTO[]> {
    const dateList = await this.prismaService.surveyGroup
      .findUniqueOrThrow({
        where: { id },
        select: {
          surveys: {
            select: {
              date: true
            },
            orderBy: {
              date: 'asc'
            }
          }
        }
      })
      .then((result) => result.surveys)

    if (dateList.length === 0) {
      throw new HttpException(
        { message: '출석조사 정보가 존재하지 않습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    return await this.prismaService.people.findMany({
      where: {
        AND: [
          { attendanceTarget: true },
          {
            Attendance: {
              none: {
                date: {
                  in: dateList.map((data) => data.date)
                }
              }
            }
          }
        ]
      },
      select: {
        id: true,
        name: true,
        studentNo: true,
        Attendance: {
          where: {
            date: {
              in: dateList.map((data) => data.date)
            }
          },
          select: {
            date: true
          }
        }
      }
    })
  }

  async getSubmitResultsByStudentId(studentId: string): Promise<Attendance[]> {
    const user = await this.prismaService.people.findUniqueOrThrow({
      where: {
        studentId
      },
      select: {
        id: true
      }
    })

    const surveys = await this.prismaService.surveyGroup.findMany({
      orderBy: {
        id: 'desc'
      },
      select: {
        surveys: {
          select: {
            date: true
          }
        }
      },
      take: 3
    })

    const dates: Array<Date> = []

    surveys.forEach((item) => {
      item.surveys.forEach((survey) => dates.push(survey.date))
    })

    return await this.prismaService.attendance.findMany({
      where: {
        AND: [
          {
            date: {
              in: dates
            }
          },
          {
            People: {
              id: user.id
            }
          }
        ]
      }
    })
  }

  async updateSurveySubmit(
    attendanceId: number,
    surveyDTO: UpdateSurveySubmitDTO
  ): Promise<Attendance> {
    const check = await this.prismaService.attendance.findUniqueOrThrow({
      where: {
        id: attendanceId
      },
      select: {
        date: true
      }
    })

    if (check.date.getTime() - this.KR_DIFF < this.getUTC(new Date())) {
      throw new HttpException(
        {
          message: '출석 변경은 운동당일 전날까지만 가능합니다.',
          code: '100'
        },
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    return await this.prismaService.attendance.update({
      where: {
        id: attendanceId
      },
      data: {
        ...surveyDTO
      }
    })
  }

  async registerSeparateSurvey(
    surveyDTO: RegisterSeparateSurveyDTO
  ): Promise<{ id: number }> {
    const user = await this.prismaService.people.findUniqueOrThrow({
      where: {
        id: surveyDTO.peopleId
      },
      select: {
        uid: true
      }
    })

    return await this.prismaService.attendance.upsert({
      where: {
        uid_date: {
          uid: user.uid,
          date: surveyDTO.date
        }
      },
      create: {
        date: surveyDTO.date,
        survey: surveyDTO.survey,
        reason: surveyDTO.reason,
        People: {
          connect: {
            uid: user.uid
          }
        }
      },
      update: {
        survey: surveyDTO.survey,
        reason: surveyDTO.reason
      },
      select: {
        id: true
      }
    })
  }

  private getUTC(date: Date): number {
    return date.getTime() + date.getTimezoneOffset() * 60 * 1000
  }
}
