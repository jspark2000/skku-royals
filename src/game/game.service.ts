import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameInfoDTO } from './dto/gameInfo.dto';
import { RegisterGameRequestDTO } from './dto/registerGameRequest.dto';
import { UpdateGameRequestDTO } from './dto/updateGameRequest.dto';

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async getGameInfos(): Promise<GameInfoDTO[]> {
    const gameInfos = await this.prismaService.games.findMany({
      select: {
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
    const createResult = await this.prismaService.games.create({
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
    const updateResult = await this.prismaService.games.update({
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
}
