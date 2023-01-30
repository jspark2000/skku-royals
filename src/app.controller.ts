import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { AuthGuard } from './common/guards/auth.guard';
import { SessionUserInfo } from './common/interfaces/sessionUserInfo.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getLandingPage(@Req() req: Request) {
    if (req.session.authed) {
      return {
        authed: true,
        userNickname: req.session.userInfo.userNickname,
      };
    } else {
      return {
        authed: false,
        userNickname: undefined,
      };
    }
  }

  @Get('admin')
  @Render('pages/admin/main')
  @UseGuards(AuthGuard) // @UseGurads(AdminGuard): production
  getAdminMainPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;

    return { userInfo };
  }
}
