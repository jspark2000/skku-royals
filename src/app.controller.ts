import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  async getLandingPage(@Req() req: Request) {
    if (req.session.authed) {
      return {
        authed: true,
        userInfo: req.session.userInfo,
      };
    } else {
      return {
        authed: false,
        userInfo: undefined,
      };
    }
  }
}
