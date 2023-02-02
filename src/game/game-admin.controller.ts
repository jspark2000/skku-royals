import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Render,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { GetGameReviewResponseDTO } from './dto/getGameReviewResponse.dto';
import { SetGameReviewRequestDTO } from './dto/setGameReviewRequest.dto';
import { GameService } from './game.service';

@Controller('admin/game')
export class GameAdminController {
  constructor(private readonly gameService: GameService) {}

  @Get('setting-review')
  @Render('pages/admin/game/setting-review')
  async getGameReviewSettingPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const gameList = await this.gameService.getGameInfos();
      return { gameList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Post('setting-review')
  @Render('back_with_msg')
  async settingGameReview(@Body() gameReviewDTO: SetGameReviewRequestDTO) {
    try {
      const { id } = await this.gameService.settingGameReview(gameReviewDTO);
      return { msg: `시합후기 마감 정보가 설정되었습니다.\\n시합 ID: ${id}` };
    } catch (error) {
      throw error;
    }
  }

  @Get('list')
  @Render('pages/admin/game/list')
  async getGameReviewListPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const gameList = await this.gameService.getGameInfos();
      return { gameList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Get('list/detail')
  @Render('pages/admin/game/list-detail')
  async getDetailGameReviewPage(
    @Req() req: Request,
    @Query('gameId', ParseIntPipe) gameId: number,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const gameReviewData: GetGameReviewResponseDTO =
        await this.gameService.getGameReviewData(gameId);
      return { ...gameReviewData, userInfo };
    } catch (error) {
      throw error;
    }
  }
}
