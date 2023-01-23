import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async sessionTest(@Req() request: Request & { session: { visits: number } }) {
    request.session.visits = request.session.visits
      ? request.session.visits + 1
      : 1;
    return { message: request.session.visits };
  }
}
