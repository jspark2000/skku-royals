import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  getLoginPage(@Res() res: Response) {
    const oauth2URL: string = this.authService.getOAuth2URL();
    return res.render('pages/auth/login', { oauth2URL });
  }
}
