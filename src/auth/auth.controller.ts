import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('login')
  getLoginPage(@Res() res: Response) {
    return res.render('pages/auth/login');
  }
}
