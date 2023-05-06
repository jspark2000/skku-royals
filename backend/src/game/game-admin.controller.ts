import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post
} from '@nestjs/common'
import { Prisma, Role } from '@prisma/client'
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
}
