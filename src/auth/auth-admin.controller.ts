import {
  Body,
  Controller,
  Delete,
  Get,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { AuthService } from './auth.service';

@Controller('admin/auth')
@UseGuards(AdminGuard)
export class AuthAdminController {
  constructor(private readonly authService: AuthService) {}

  @Get('account-list')
  @Render('pages/admin/auth/account-list')
  async getAccountList(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const bandUserList = await this.authService.getBandUserList();
      return { bandUserList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Delete('account-list')
  async deleteBandUser(@Body('userKey') userKey: string) {
    try {
      const deleteResult = await this.authService.deleteBandUser(userKey);
      return deleteResult;
    } catch (error) {
      throw error;
    }
  }
}
