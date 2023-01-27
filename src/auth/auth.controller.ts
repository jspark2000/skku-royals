import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  getLoginPage(@Res() res: Response) {
    const oauth2URL: string = this.authService.getOAuth2URL();
    return res.render('pages/auth/login', { oauth2URL });
  }

  @Get('login/callback')
  async login(
    @Query('code') code: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const sessionInfo = await this.authService.loginOrRegister(code);
      req.session.userInfo = sessionInfo.userInfo;
      req.session.key = sessionInfo.key;
      req.session.authed = sessionInfo.authed;
      req.session.save(() => {
        return res.redirect('/');
      });
    } catch (error) {
      throw new HttpException('로그인 실패', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    req.session.destroy((error) => {
      if (error)
        throw new HttpException(
          '로그아웃 실패',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      return res.redirect('/');
    });
  }
}
