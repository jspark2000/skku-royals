import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { GetGameResultRequestDTO } from './dto/getGameResultRequest.dto';
import { RegisterGameRequestDTO } from './dto/registerGameRequest.dto';
import { UpdateGameRequestDTO } from './dto/updateGameRequest.dto';
import { GameService } from './game.service';

@Controller('game')
@UseGuards(AuthGuard)
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @Render('pages/game/main')
  getMainPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    return { userInfo };
  }

  @Get('register')
  @Render('pages/game/register')
  async getGameRegisterationPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const gameInfos = await this.gameService.getGameInfos();
      return { userInfo, gameInfos };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          '시합 정보를 불러오지 못했습니다. 다시 시도해주세요',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        throw error;
      }
    }
  }

  @Post('register')
  @Render('back_with_msg')
  async registerGame(
    @Req() req: Request,
    @Body() gameDTO: RegisterGameRequestDTO,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const { id } = await this.gameService.registerGame(gameDTO);
      return { msg: `성공적으로 게임을 등록했습니다.\\nid:${id}`, userInfo };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          '시합 정보를 등록하지 못했습니다. 입력한 정보를 다시한번 확인해주세요',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else {
        throw error;
      }
    }
  }

  @Put('register')
  async updateGame(@Req() req: Request, @Body() gameDTO: UpdateGameRequestDTO) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const { id } = await this.gameService.updateGame(gameDTO);
      return { success: true, id, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Get('list')
  @Render('pages/game/list')
  async getGameListPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const gameInfos = await this.gameService.getGameInfos();
      return { userInfo, gameInfos };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          '시합 정보를 불러오지 못했습니다. 다시 시도해주세요',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        throw error;
      }
    }
  }

  @Get('list/detail')
  @Render('pages/game/list-detail')
  async getGameResult(
    @Req() req: Request,
    @Query() gameDTO: GetGameResultRequestDTO,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const gameResult = await this.gameService.getGameResult(gameDTO);
      return { userInfo, gameResult };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          '시합 정보를 불러오지 못했습니다. 다시 시도해주세요',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        throw error;
      }
    }
  }
}
