import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Survey, SurveyGroup } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { NotSubmittedDTO } from './dto/notSubmitted.dto'
import { registerSurveysDTO } from './dto/registerSurveys.dto'
import { SubmitSurveyDTO } from './dto/submitSurvey.dto'

@Injectable()
export class SurveyService {
  constructor(private readonly prismaService: PrismaService) {}

  async getSurveyList(): Promise<SurveyGroup[]> {
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
        name: true,
        studentNo: true
      }
    })
  }
}
