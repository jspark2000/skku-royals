import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import {
  Attendance,
  AttendanceStatus,
  AttendanceType,
  Location,
  Survey,
  SurveyGroup
} from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { NotSubmittedDTO } from './dto/notSubmitted.dto'
import { RegisterSeparateSurveyDTO } from './dto/registerSeparateSurvey.dto'
import { registerSurveysDTO } from './dto/registerSurveys.dto'
import { SubmitSurveyDTO } from './dto/submitSurvey.dto'
import { UpdateSurveySubmitDTO } from './dto/updateSurveySubmit.dto'
import axios from 'axios'

@Injectable()
export class SurveyService {
  KR_DIFF: number = 9 * 60 * 60 * 1000

  constructor(private readonly prismaService: PrismaService) {}

  async getSurveyGroupList(): Promise<
    {
      id: number
      name: string
      surveys: { date: Date }[]
    }[]
  > {
    return await this.prismaService.surveyGroup.findMany({
      select: {
        id: true,
        name: true,
        surveys: {
          orderBy: {
            date: 'asc'
          },
          select: {
            date: true
          }
        }
      },
      orderBy: { id: 'desc' },
      take: 5
    })
  }

  async getSurveyModal(id: number): Promise<Survey[]> {
    const result = await this.prismaService.surveyGroup
      .findUniqueOrThrow({
        where: { id },
        select: {
          surveys: {
            select: {
              id: true,
              date: true,
              type: true,
              groupId: true,
              description: true
            },
            orderBy: { date: 'asc' }
          }
        }
      })
      .then((result) => result.surveys)

    if (result[0].date.getTime() - 540 * 60 * 1000 <= new Date().getTime()) {
      throw new HttpException(
        { message: '출석조사가 마감되었습니다.', code: 100 },
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    return result
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
          location: surveys[i].location,
          reason: surveys[i].reason
        },
        update: {
          survey: surveys[i].survey,
          location: surveys[i].location,
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

    const result = await this.prismaService.surveyGroup.create({
      data: {
        name: surveyDTO.name,
        surveys: {
          createMany: {
            data: surveyDTO.surveys
          }
        }
      }
    })

    if (result) {
      await this.postToSlackChannel(surveyDTO)
    }

    return result
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
      },
      orderBy: [{ newbie: 'asc' }, { studentNo: 'asc' }, { name: 'asc' }]
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
    await this.prismaService.attendance.findUniqueOrThrow({
      where: {
        id: attendanceId
      },
      select: {
        date: true
      }
    })

    return await this.prismaService.attendance.update({
      where: {
        id: attendanceId
      },
      data: {
        ...surveyDTO
      }
    })
  }

  async upsertSeparateSurvey(
    surveyDTO: RegisterSeparateSurveyDTO
  ): Promise<{ id: number }> {
    const user = await this.prismaService.people.findUniqueOrThrow({
      where: {
        name_studentNo: {
          name: surveyDTO.name,
          studentNo: surveyDTO.studentNo
        }
      },
      select: {
        uid: true
      }
    })

    const survey = await this.prismaService.survey.findFirst({
      where: {
        date: surveyDTO.date
      },
      select: {
        type: true
      }
    })

    if (!survey) {
      throw new HttpException(
        { message: '해당하는 날짜에는 운동이 없습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    if (surveyDTO.survey !== AttendanceStatus.Absent) {
      if (
        survey.type === AttendanceType.Integrated &&
        surveyDTO.location !== Location.Integrated
      ) {
        throw new HttpException(
          { message: '잘못된 캠퍼스 선택입니다.', code: 100 },
          HttpStatus.BAD_REQUEST
        )
      } else if (
        survey.type === AttendanceType.Dispersion &&
        surveyDTO.location === Location.Integrated
      ) {
        throw new HttpException(
          { message: '잘못된 캠퍼스 선택입니다.', code: 100 },
          HttpStatus.BAD_REQUEST
        )
      }
    }

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

  private async postToSlackChannel(surveyDTO: registerSurveysDTO) {
    const data = {
      attachments: [
        {
          color: '#2eb886',
          pretext: '새로운 출석 조사가 등록 되었습니다',
          author_name: 'Survey Page',
          author_link: 'https://survey.skku-royals.football/',
          author_icon:
            'https://s3.ap-northeast-2.amazonaws.com/staff.skku-royals.football/favicon-96x96.png',
          title: '# ' + surveyDTO.name,
          title_link: 'https://survey.skku-royals.football/',
          text: '출석체크 목록',
          fields: [],
          footer: 'STAFF Survey page',
          footer_icon:
            'https://s3.ap-northeast-2.amazonaws.com/staff.skku-royals.football/favicon-96x96.png',
          ts: new Date().getTime(),
          actions: [
            {
              text: '출석조사 하러가기',
              type: 'button',
              url: 'https://survey.skku-royals.football/',
              style: 'primary'
            }
          ]
        }
      ]
    }

    surveyDTO.surveys.forEach((survey) => {
      data.attachments[0].fields.push({
        title: survey.date.toISOString().substring(5, 10),
        value: survey.description,
        short: true
      })
    })

    await axios
      .post(process.env.SLACK_WEBHOOK_WRL, { attachments: data.attachments })
      .then((result) => result.data)
      .catch((error) => error)
  }
}
