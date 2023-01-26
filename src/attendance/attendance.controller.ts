import { Controller, Get, Query, Render, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { AttendanceService } from './attendance.service';
import { DailyAttendancesRequestDTO } from './dto/dailyAttendancesRequest.dto';

@Controller('attendance')
@UseGuards(AuthGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  @Render('pages/attendance/main')
  getMainPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;

    return { userInfo };
  }

  @Get('list')
  @Render('pages/attendance/list')
  async getAttendanceDatesList(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const dates = await this.attendanceService.getAttendanceDatesList();
      return { userInfo, dates };
    } catch (error) {
      throw error;
    }
  }

  @Get('list/detail')
  @Render('pages/attendance/list-detail')
  async getDailyAttendances(
    @Req() req: Request,
    @Query() attendanceDTO: DailyAttendancesRequestDTO,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const dailyAttendances = await this.attendanceService.getDailyAttendances(
        attendanceDTO,
      );

      return { userInfo, ...dailyAttendances };
    } catch (error) {
      throw error;
    }
  }
}
