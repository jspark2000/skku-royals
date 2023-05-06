import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RegisterGameDTO } from './dto/registerGame.dto'
import { Game } from '@prisma/client'
import { GameListDTO } from './dto/gameList.dto'

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async registerGame(gameDTO: RegisterGameDTO): Promise<Game> {
    const result = await this.prismaService.game.create({
      data: {
        ...gameDTO
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
