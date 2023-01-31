import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendanceCheckRequestDTO } from './dto/attendanceCheckRequest.dto';
import { AttendanceDatesListResponseDTO } from './dto/attendanceDateListResponse.dto';
import { AttendanceSurveyResultFileDTO } from './dto/attendanceSurveyResultFile.dto';
import { DailyAttendancesRequestDTO } from './dto/dailyAttendancesRequest.dto';
import { DailyAttendancesResponseDTO } from './dto/dailyAttendancesResponse.dto';
import { GetDetailAttendanceSurveyResultDTO } from './dto/getDetailAttendanceSurveyResult.dto';
import { RegisterManyAttendanceDTO } from './dto/registerManyAttendance.dto';
import { RegisterOneAttendanceDTO } from './dto/registerOneAttendance.dto';
import { UpdateManyAttendancesRequestDTO } from './dto/updateManyAttendancesRequest.dto';
import { UpdateOneAttendanceRequestDTO } from './dto/updateOneAttendanceRequest.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAttendanceDatesList(): Promise<AttendanceDatesListResponseDTO[]> {
    const dates = await this.prismaService.attendance.findMany({
      select: {
        date: true,
      },
      orderBy: {
        date: 'desc',
      },
      distinct: ['date'],
    });

    if (dates.length === 0) {
      throw new HttpException(
        '불러올 출석 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return dates;
  }

  async getDailyAttendances(
    attendanceRequestDTO: DailyAttendancesRequestDTO,
  ): Promise<DailyAttendancesResponseDTO> {
    const attendances = await this.prismaService.attendance.findMany({
      select: {
        survey: true,
        late: true,
        location: true,
        checked: true,
        People: {
          select: {
            name: true,
            studentNo: true,
          },
        },
      },
      where: { date: attendanceRequestDTO.date },
      orderBy: [{ People: { studentNo: 'asc' } }, { People: { name: 'asc' } }],
    });

    if (attendances.length === 0) {
      throw new HttpException(
        '불러올 출석 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const dailyAttendances = {
      date: attendanceRequestDTO.date,
      attendances: attendances.map((attendance) => {
        return {
          name: attendance.People.name,
          studentNo: attendance.People.studentNo,
          survey: attendance.survey,
          late: attendance.late,
          location: attendance.location,
          checked: attendance.checked,
        };
      }),
    };

    return dailyAttendances;
  }

  async attendanceCheck(
    attendanceDTO: AttendanceCheckRequestDTO,
  ): Promise<{ id: number }> {
    const { uid } = await this.prismaService.people.findUniqueOrThrow({
      where: {
        name_studentNo: {
          name: attendanceDTO.name,
          studentNo: attendanceDTO.studentNo,
        },
      },
      select: {
        uid: true,
      },
    });

    const updateResult = await this.prismaService.attendance.update({
      where: {
        uid_date_location: {
          uid,
          date: attendanceDTO.date,
          location: attendanceDTO.location,
        },
      },
      data: {
        checked: true,
      },
      select: {
        id: true,
      },
    });

    return updateResult;
  }

  async getAttendanceSurveyResultFiles(): Promise<
    AttendanceSurveyResultFileDTO[]
  > {
    const attendanceSurveyResultFiles =
      await this.prismaService.googleSheet.findMany({
        select: {
          id: true,
          createdAt: true,
          sheetName: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    return attendanceSurveyResultFiles;
  }

  async getDetailAttendanceSurveyResult(
    id: number,
  ): Promise<GetDetailAttendanceSurveyResultDTO> {
    const resultFile = await this.prismaService.googleSheet.findUniqueOrThrow({
      where: {
        id,
      },
    });

    const surveyResult = {
      id: resultFile.id,
      columns: JSON.parse(resultFile.columns),
      attendances: JSON.parse(resultFile.records),
    };

    return surveyResult;
  }

  async registerOneAttendance(
    attendanceDTO: RegisterOneAttendanceDTO,
  ): Promise<{ id: number }> {
    const { uid } = await this.prismaService.people.findUniqueOrThrow({
      where: {
        name_studentNo: {
          name: attendanceDTO.name,
          studentNo: attendanceDTO.studentNo,
        },
      },
      select: {
        uid: true,
      },
    });

    const checkExistAttendance = await this.prismaService.attendance.findFirst({
      where: {
        uid: uid,
        date: attendanceDTO.date,
      },
    });

    if (checkExistAttendance) {
      throw new HttpException(
        '이미 출석 정보가 존재합니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const registerResult = await this.prismaService.attendance.create({
      data: {
        uid,
        survey: attendanceDTO.survey !== 2 ? true : false,
        late: attendanceDTO.survey !== 1 ? false : true,
        date: attendanceDTO.date,
        location: attendanceDTO.location,
        isGame: false,
        checked: false,
      },
      select: {
        id: true,
      },
    });

    return registerResult;
  }

  async registerManyAttendances(
    attendanceDTO: RegisterManyAttendanceDTO,
  ): Promise<{ count: number; success: boolean }> {
    let registerationCount = 0;

    for (let i = 0; i < attendanceDTO.attendances.length; i++) {
      const uid = await this.prismaService.people.findUnique({
        where: {
          name_studentNo: {
            name: attendanceDTO.attendances[i].name,
            studentNo: attendanceDTO.attendances[i].studentNo,
          },
        },
        select: {
          uid: true,
        },
      });
      if (uid) {
        const result = await this.prismaService.attendance.upsert({
          where: {
            uid_date_location: {
              uid: uid.uid,
              date: attendanceDTO.attendances[i].date,
              location: attendanceDTO.attendances[i].location,
            },
          },
          create: {
            date: attendanceDTO.attendances[i].date,
            location: attendanceDTO.attendances[i].location,
            survey: attendanceDTO.attendances[i].survey,
            late: attendanceDTO.attendances[i].late,
            isGame: false,
            People: {
              connect: {
                uid: uid.uid,
              },
            },
          },
          update: {
            survey: attendanceDTO.attendances[i].survey,
            late: attendanceDTO.attendances[i].late,
          },
          select: {
            id: true,
          },
        });
        if (result) {
          registerationCount += 1;
        }
      }
    }

    const success = registerationCount > 0 ? true : false;

    return { count: registerationCount, success };
  }

  async updateOneAttendance(
    attendanceDTO: UpdateOneAttendanceRequestDTO,
  ): Promise<{ id: number }> {
    const uid = await this.prismaService.people.findUnique({
      where: {
        name_studentNo: {
          name: attendanceDTO.name,
          studentNo: attendanceDTO.studentNo,
        },
      },
    });

    if (!uid) {
      throw new HttpException(
        '존재하지 않는 부원 정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const exist = await this.prismaService.attendance.findUnique({
      where: {
        uid_date_location: {
          uid: uid.uid,
          date: attendanceDTO.date,
          location: attendanceDTO.location,
        },
      },
      select: {
        id: true,
      },
    });

    if (!exist) {
      throw new HttpException(
        '존재하지 않는 출석 정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const updateResult = await this.prismaService.attendance.update({
      where: {
        id: exist.id,
      },
      data: {
        date: attendanceDTO.toDate,
        survey: attendanceDTO.toSurvey !== '2' ? true : false,
        late: attendanceDTO.toSurvey !== '1' ? false : true,
      },
      select: {
        id: true,
      },
    });

    return updateResult;
  }

  async updateManyAttendances(
    attendanceDTO: UpdateManyAttendancesRequestDTO,
  ): Promise<{ count: number }> {
    const updateResult = await this.prismaService.attendance.updateMany({
      where: {
        date: attendanceDTO.date,
      },
      data: {
        date: attendanceDTO.toDate,
      },
    });

    if (updateResult.count === 0) {
      throw new HttpException(
        '존재하지 않는 출석 정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return updateResult;
  }
}
