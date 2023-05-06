import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RegisterGameDTO } from './dto/registerGame.dto'
import { Game } from '@prisma/client'
import { GameListDTO } from './dto/gameList.dto'

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async registerGame(gameDTO: RegisterGameDTO): Promise<Game> {
    const check = await this.prismaService.attendance.findFirst({
      where: {
        date: gameDTO.gameDate
      }
    })

    if (!check) {
      throw new HttpException(
        { message: '해당하는 날짜의 출석 조사 정보가 없습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    await this.prismaService.attendance.updateMany({
      where: {
        date: gameDTO.gameDate
      },
      data: {
        isGame: true
      }
    })

    const result = await this.prismaService.game.create({
      data: {
        ...gameDTO
      }
    })

    return result
  }

  async deleteGame(id: number): Promise<Game> {
    const result = await this.prismaService.game.delete({
      where: {
        id
      }
    })

    await this.prismaService.attendance.updateMany({
      where: {
        date: result.gameDate
      },
      data: {
        isGame: false
      }
    })

    return result
  }

  async getGameList(): Promise<GameListDTO[]> {
    return await this.prismaService.game
      .findMany({
        take: 20,
        orderBy: { gameDate: 'desc' }
      })
      .then((result) =>
        result.map((game) => {
          return {
            id: game.id,
            name: game.gameName,
            date: game.gameDate
          }
        })
      )
  }

  async getGameInfo(id: number): Promise<Game> {
    return await this.prismaService.game.findUniqueOrThrow({
      where: {
        id
      }
    })
  }
}
