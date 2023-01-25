import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('attendance')
@UseGuards(AuthGuard)
export class AttendanceController {
  @Get()
  @Render('pages/attendance/main')
  getMainPage(@Req() req: Request) {
    return { userInfo: req.session.userInfo };
  }
}
