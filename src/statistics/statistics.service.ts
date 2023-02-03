import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatisticsAttendanceDTO } from './dto/statisticsAttendance.dto';

@Injectable()
export class StatisticsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPersonalStatistics(id: number) {
    const userProfile = await this.getUserProfile(id);
    const semesterAttendances = await this.getPersonalSemesterAttendances(
      userProfile.uid,
    );
    const positionAttendanceRank = await this.getPositionAttendanceRank(
      userProfile.uid,
    );

    return { userProfile, semesterAttendances, positionAttendanceRank };
  }

  private async getUserProfile(id: number) {
    const userProfiles = await this.prismaService.people.findUnique({
      where: {
        id: id,
      },
      select: {
        uid: true,
        name: true,
        studentNo: true,
        offPosition: true,
        defPosition: true,
        BandUser: {
          select: {
            profileUrl: true,
          },
        },
      },
    });

    if (!userProfiles) {
      throw new HttpException(
        '해당하는 부원 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return userProfiles;
  }

  private async getPersonalSemesterAttendances(uid: string): Promise<{
    usualAttendances: StatisticsAttendanceDTO[];
  }> {
    const now = new Date();

    const semesterAttendances = await this.prismaService.attendance.findMany({
      where: {
        uid,
        date: {
          gte: new Date(now.setMonth(now.getMonth() - 6)),
        },
      },
      select: {
        id: true,
        date: true,
        survey: true,
        late: true,
        checked: true,
        isGame: true,
      },
      orderBy: {
        date: 'asc',
      },
    });

    if (semesterAttendances.length === 0) {
      throw new HttpException(
        '해당하는 부원의 출석 정보가 아직 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const monthlyUsualStatisticsList: {
      year: number;
      month: number;
      presence: number;
      late: number;
      absent: number;
    }[] = [];

    semesterAttendances.forEach((attendance) => {
      const check = monthlyUsualStatisticsList.filter(
        (monthlyStatistics) =>
          monthlyStatistics.year === attendance.date.getFullYear() &&
          monthlyStatistics.month === attendance.date.getMonth() + 1,
      ).length;

      if (check === 0) {
        monthlyUsualStatisticsList.push({
          year: attendance.date.getFullYear(),
          month: attendance.date.getMonth() + 1,
          presence: 0,
          late: 0,
          absent: 0,
        });
      }

      const index = monthlyUsualStatisticsList.findIndex(
        (monthlyStatistics) =>
          monthlyStatistics.year === attendance.date.getFullYear() &&
          monthlyStatistics.month === attendance.date.getMonth() + 1,
      );

      if (attendance.survey && !attendance.late) {
        monthlyUsualStatisticsList[index].presence += 1;
      }

      if (attendance.survey && attendance.late) {
        monthlyUsualStatisticsList[index].late += 1;
      }

      if (!attendance.survey) {
        monthlyUsualStatisticsList[index].absent += 1;
      }
    });

    return {
      usualAttendances: monthlyUsualStatisticsList,
    };
  }

  private async getPositionAttendanceRank(uid: string): Promise<{
    offPositionRank: number;
    offPositionTotal: number;
    defPositionRank: number;
    defPositionTotal: number;
  }> {
    const { offPosition, defPosition } =
      await this.prismaService.people.findUnique({
        where: {
          uid,
        },
        select: {
          offPosition: true,
          defPosition: true,
        },
      });

    const { date } = await this.prismaService.attendance.findFirst({
      select: {
        date: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    const monthBase = new Date(date.getTime());
    const dateStart = new Date(monthBase.setDate(monthBase.getDate() - 30));
    const dateEnd = new Date(date.getTime());

    const targetCount = (
      await this.prismaService.attendance.findMany({
        where: {
          uid,
          survey: true,
          AND: [
            {
              date: { gte: dateStart },
            },
            {
              date: {
                lte: dateEnd,
              },
            },
          ],
        },
        select: {
          id: true,
        },
      })
    ).length;

    const offPositionList = await this.prismaService.people
      .findMany({
        where: {
          offPosition,
        },
        select: {
          uid: true,
        },
      })
      .then((result) => {
        return result.map((attendance) => attendance.uid);
      });

    const offPositionAttendanceCount = await this.prismaService.attendance
      .groupBy({
        by: ['uid'],
        where: {
          AND: [{ date: { gte: dateStart } }, { date: { lte: dateEnd } }],
          uid: {
            in: offPositionList,
          },
          survey: true,
        },
        _count: {
          survey: true,
        },
      })
      .then((result) => {
        return result.map((count) => count._count.survey);
      });

    let offPositionRank =
      offPositionAttendanceCount.sort((a, b) => b - a).indexOf(targetCount) + 1;

    if (offPositionRank === 0) offPositionRank = offPositionList.length;

    if (defPosition !== 'STAFF' && defPosition !== 'no') {
      const defPositionList = await this.prismaService.people
        .findMany({
          where: {
            defPosition,
          },
          select: {
            uid: true,
          },
        })
        .then((result) => {
          return result.map((attendance) => attendance.uid);
        });

      const defPositionAttendanceCount = await this.prismaService.attendance
        .groupBy({
          by: ['uid'],
          where: {
            AND: [{ date: { gte: dateStart } }, { date: { lte: dateEnd } }],
            uid: {
              in: defPositionList,
            },
            survey: true,
          },
          _count: {
            survey: true,
          },
        })
        .then((result) => {
          return result.map((count) => count._count.survey);
        });

      let defPositionRank =
        defPositionAttendanceCount.sort((a, b) => b - a).indexOf(targetCount) +
        1;

      if (defPositionRank === 0) defPositionRank = defPositionList.length;

      return {
        offPositionRank,
        offPositionTotal: offPositionList.length,
        defPositionRank,
        defPositionTotal: defPositionList.length,
      };
    }

    return {
      offPositionRank,
      offPositionTotal: offPositionList.length,
      defPositionRank: undefined,
      defPositionTotal: undefined,
    };
  }
}
