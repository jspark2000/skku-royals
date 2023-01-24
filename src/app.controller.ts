import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async sessionTest(@Req() req: Request) {
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
}
