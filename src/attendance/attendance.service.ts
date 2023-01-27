import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendanceCheckRequestDTO } from './dto/attendanceCheckRequest.dto';
import { AttendanceDatesListResponseDTO } from './dto/attendanceDateListResponse.dto';
import { DailyAttendancesRequestDTO } from './dto/dailyAttendancesRequest.dto';
import { DailyAttendancesResponseDTO } from './dto/dailyAttendancesResponse.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAttendanceDatesList(): Promise<AttendanceDatesListResponseDTO[]> {
    const dates = await this.prismaService.attendance.findMany({
      select: {
        day: true,
      },
      orderBy: {
        day: 'desc',
      },
      distinct: ['day'],
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
        rate: true,
        location: true,
        checked: true,
        People: {
          select: {
            name: true,
            studentNo: true,
          },
        },
      },
      where: { day: attendanceRequestDTO.date },
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
          late: attendance.rate,
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
        uid_day_location: {
          uid,
          day: attendanceDTO.date,
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
}
