import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe
} from '@nestjs/common'
import { Game, Prisma, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { GameService } from './game.service'
import { GameListDTO } from './dto/gameList.dto'

@Roles(Role.Newbie)
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('list')
  async getGameList(): Promise<GameListDTO[]> {
    return await this.gameService.getGameList()
  }

  @Get(':id')
  async getGameInfo(@Param('id', ParseIntPipe) id: number): Promise<Game> {
    try {
      return await this.gameService.getGameInfo(id)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 시합 정보입니다', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }
}
