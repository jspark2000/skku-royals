import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameInfoDTO } from './dto/gameInfo.dto';
import { GetGameResultRequestDTO } from './dto/getGameResultRequest.dto';
import { GetGameResultResponseDTO } from './dto/getGameResultResponse.dto';
import {
  GameReviewDTO,
  GetGameReviewResponseDTO,
} from './dto/getGameReviewResponse.dto';
import { RegisterGameRequestDTO } from './dto/registerGameRequest.dto';
import { SetGameReviewRequestDTO } from './dto/setGameReviewRequest.dto';
import { UpdateGameRequestDTO } from './dto/updateGameRequest.dto';

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async getGameInfos(): Promise<GameInfoDTO[]> {
    const gameInfos = await this.prismaService.game.findMany({
      select: {
        id: true,
        gameName: true,
        gameDate: true,
      },
      orderBy: {
        gameDate: 'desc',
      },
    });

    return gameInfos;
  }

  async registerGame(gameDTO: RegisterGameRequestDTO): Promise<{ id: number }> {
    const createResult = await this.prismaService.game.create({
      data: {
        ...gameDTO,
      },
      select: {
        id: true,
      },
    });

    return createResult;
  }

  async updateGame(gameDTO: UpdateGameRequestDTO): Promise<{ id: number }> {
    const updateResult = await this.prismaService.game.update({
      where: {
        gameDate: gameDTO.gameDate,
      },
      data: {
        homeTeamScore: gameDTO.homeTeamScore,
        awayTeamScore: gameDTO.awayTeamScore,
      },
      select: {
        id: true,
      },
    });

    return updateResult;
  }

  async getGameResult(
    gameDTO: GetGameResultRequestDTO,
  ): Promise<GetGameResultResponseDTO> {
    const gameResult = await this.prismaService.game.findUniqueOrThrow({
      where: {
        gameDate: gameDTO.date,
      },
      select: {
        id: true,
        gameName: true,
        gameDate: true,
        homeTeamName: true,
        homeTeamScore: true,
        awayTeamName: true,
        awayTeamScore: true,
      },
    });

    return gameResult;
  }

  async settingGameReview(gameReviewDTO: SetGameReviewRequestDTO) {
    const gameExist: { gameDate: Date } =
      await this.prismaService.game.findUnique({
        where: {
          id: gameReviewDTO.gameId,
        },
        select: {
          gameDate: true,
        },
      });

    if (!gameExist) {
      throw new HttpException(
        '시합 정보가 등록되어있지 않습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const attendanceExist = await this.prismaService.attendance.findFirst({
      where: {
        date: gameExist.gameDate,
      },
      select: {
        id: true,
      },
    });

    if (!attendanceExist) {
      throw new HttpException(
        '시합 정보와 관련된 출석 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    await this.prismaService.attendance.updateMany({
      where: {
        date: gameExist.gameDate,
      },
      data: {
        isGame: true,
      },
    });

    const result = await this.prismaService.game.update({
      where: {
        id: gameReviewDTO.gameId,
      },
      data: {
        everyone: gameReviewDTO.everyone,
        deadLine: gameReviewDTO.deadLine,
        lateLine: gameReviewDTO.lateLine,
      },
      select: {
        id: true,
      },
    });

    return result;
  }

  async getGameReviewData(gameId: number): Promise<GetGameReviewResponseDTO> {
    const gameReviewExist = await this.prismaService.game.findUnique({
      where: {
        id: gameId,
      },
      select: {
        gameName: true,
        gameDate: true,
        everyone: true,
        deadLine: true,
        lateLine: true,
      },
    });

    if (!gameReviewExist) {
      throw new HttpException(
        '시합후기 마감 정보가 설정되지 않았습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (
      gameReviewExist.everyone === undefined ||
      gameReviewExist.deadLine === undefined ||
      gameReviewExist.lateLine === undefined
    ) {
      throw new HttpException(
        '시합후기 마감 정보가 설정되지 않았습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    let targetPeopleList = (
      await this.prismaService.attendance.findMany({
        where: {
          date: gameReviewExist.gameDate,
          isGame: true,
          survey: gameReviewExist.everyone ? undefined : true,
        },
        select: {
          People: {
            select: {
              name: true,
              studentNo: true,
              bandUserKey: true,
            },
          },
        },
      })
    ).map((peopleData) => {
      return {
        ...peopleData.People,
      };
    });

    const startDateKO = new Date(
      gameReviewExist.gameDate.getTime() - 9 * 60 * 60 * 1000,
    );

    const endDateKO = new Date(
      gameReviewExist.deadLine.getTime() +
        60 * 60 * 24 * 1000 -
        9 * 60 * 60 * 1000 -
        1,
    );

    const lateStartDateKO = new Date(
      gameReviewExist.deadLine.getTime() - 9 * 60 * 60 * 1000,
    );

    const lateEndDateKO = new Date(
      gameReviewExist.lateLine.getTime() +
        60 * 60 * 24 * 1000 -
        9 * 60 * 60 * 1000 -
        1,
    );

    const ReviewListSafe = await this.prismaService.gameReview.findMany({
      where: {
        AND: [
          {
            submissionTime: { gte: startDateKO },
          },
          {
            submissionTime: { lte: endDateKO },
          },
        ],
      },
      select: {
        userKey: true,
        submissionTime: true,
      },
    });

    const ReviewListLate = await this.prismaService.gameReview.findMany({
      where: {
        AND: [
          {
            submissionTime: { gte: lateStartDateKO },
          },
          {
            submissionTime: { lte: lateEndDateKO },
          },
        ],
      },
      select: {
        userKey: true,
        submissionTime: true,
      },
    });

    let gameReviewList: GameReviewDTO[] = [];

    ReviewListSafe.forEach((reviewSafe) => {
      gameReviewList.push({
        late: false,
        submission: true,
        name: targetPeopleList.filter(
          (people) => people.bandUserKey === reviewSafe.userKey,
        )[0]?.name,
        studentNo: targetPeopleList.filter(
          (people) => people.bandUserKey === reviewSafe.userKey,
        )[0]?.studentNo,
        time: reviewSafe.submissionTime,
      });
      targetPeopleList = targetPeopleList.filter(
        (people) => people.bandUserKey !== reviewSafe.userKey,
      );
    });

    ReviewListLate.forEach((reviewLate) => {
      gameReviewList.push({
        late: true,
        submission: true,
        name: targetPeopleList.filter(
          (people) => people.bandUserKey === reviewLate.userKey,
        )[0]?.name,
        studentNo: targetPeopleList.filter(
          (people) => people.bandUserKey === reviewLate.userKey,
        )[0]?.studentNo,
        time: reviewLate.submissionTime,
      });
      targetPeopleList = targetPeopleList.filter(
        (people) => people.bandUserKey !== reviewLate.userKey,
      );
    });

    targetPeopleList.forEach((people) => {
      gameReviewList.push({
        late: false,
        submission: false,
        name: people.name,
        studentNo: people.studentNo,
      });
    });

    gameReviewList = gameReviewList.filter((gameReview) => gameReview.name);

    return {
      gameInfo: {
        gameName: gameReviewExist.gameName,
        gameDate: gameReviewExist.gameDate,
      },
      gameReviewList,
    };
  }
}
