import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'
import { Game, Prisma, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { GameService } from './game.service'
import { RegisterGameDTO } from './dto/registerGame.dto'

@Roles(Role.Admin)
@Controller('admin/game')
export class GameAdminController {
  constructor(private readonly gameService: GameService) {}

  @Post('')
  async registerGame(@Body() gameDTO: RegisterGameDTO) {
    try {
      return await this.gameService.registerGame(gameDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '이미 등록되어있는 시합입니다.', code: 100 },
          HttpStatus.CONFLICT
        )
      } else {
        throw error
      }
    }
  }

  @Delete(':id')
  async deleteGame(@Param('id', ParseIntPipe) id: number): Promise<Game> {
    try {
      return await this.gameService.deleteGame(id)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 시합 정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }
}
