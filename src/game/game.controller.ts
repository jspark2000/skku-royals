import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('game')
@UseGuards(AuthGuard)
export class GameController {
  @Get()
  @Render('pages/game/main')
  getMainPage(@Req() req: Request) {
    return { userInfo: req.session.userInfo.userNickname };
  }
}
