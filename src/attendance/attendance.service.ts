import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendanceDateDTO } from './dto/attendanceDate.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAttendanceDateList() {
    const result = await this.prismaService.attendance.findMany({
      select: {
        date: true,
        isGame: true,
      },
      orderBy: {
        date: 'desc',
      },
      take: 10,
      distinct: ['date'],
    });

    if (result.length === 0) {
      throw new HttpException(
        '불러올 출석 명단이 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return result;
  }

  async getAttendances(attendanceDTO: AttendanceDateDTO) {
    const attendances = await this.prismaService.attendance.findMany({
      where: {
        date: attendanceDTO.date,
      },
      select: {
        id: true,
        date: true,
        location: true,
        survey: true,
        late: true,
        People: {
          select: {
            name: true,
            studentNo: true,
            offPosition: true,
            defPosition: true,
          },
        },
      },
      orderBy: [
        {
          People: {
            studentNo: 'asc',
          },
        },
        {
          People: {
            name: 'asc',
          },
        },
      ],
    });

    if (attendances.length === 0) {
      throw new HttpException(
        '해당하는 날짜의 출석 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return attendances.map((attendance) => {
      return {
        id: attendance.id,
        date: attendance.date,
        location: attendance.location,
        survey: attendance.survey,
        late: attendance.late,
        name: attendance.People.name,
        studentNo: attendance.People.studentNo,
        offPosition: attendance.People.offPosition,
        defPosition: attendance.People.defPosition,
      };
    });
  }

  async getRecentAttendances(userKey: string) {
    const userInfo = await this.prismaService.bandUser.findUnique({
      where: {
        userKey,
      },
      select: {
        People: {
          select: {
            uid: true,
          },
        },
      },
    });

    const attendances = await this.prismaService.attendance.findMany({
      where: {
        uid: userInfo.People.uid,
      },
      select: {
        date: true,
        location: true,
        late: true,
        survey: true,
      },
      orderBy: {
        date: 'desc',
      },
      take: 5,
    });

    const result = {
      attendances: attendances.map((attendance) => {
        return {
          date: attendance.date.toISOString().slice(0, 10),
          location:
            attendance.location === 'integrated'
              ? '통합'
              : attendance.location === 'seoul'
              ? '명륜'
              : '율전',
          attendance: attendance.survey
            ? attendance.late
              ? '늦참'
              : '참석'
            : '불참',
        };
      }),
    };

    return result;
  }
}
