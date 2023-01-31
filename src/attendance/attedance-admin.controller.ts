import { Body, Controller, Get, Put, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { AttendanceService } from './attendance.service';
import { UpdateManyAttendancesRequestDTO } from './dto/updateManyAttendancesRequest.dto';
import { UpdateOneAttendanceRequestDTO } from './dto/updateOneAttendanceRequest.dto';

@Controller('admin/attendance')
export class AttendanceAdminController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('update')
  @Render('pages/admin/attendance/update')
  async getAttendanceUpdatePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const attendanceDateList =
        await this.attendanceService.getAttendanceDatesList();
      return { attendanceDateList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Put('update/one')
  async updateOneAttendance(
    @Body() attendanceDTO: UpdateOneAttendanceRequestDTO,
  ) {
    try {
      const { id } = await this.attendanceService.updateOneAttendance(
        attendanceDTO,
      );
      return { id, success: true };
    } catch (error) {
      throw error;
    }
  }

  @Put('update/many')
  async updateManyAttendances(
    @Body() attendanceDTO: UpdateManyAttendancesRequestDTO,
  ) {
    try {
      const { count } = await this.attendanceService.updateManyAttendances(
        attendanceDTO,
      );
      return { count, success: true };
    } catch (error) {
      throw error;
    }
  }

  @Get('delete')
  @Render('pages/admin/attendance/delete')
  async getAttendanceDeletePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const attendanceDateList =
        await this.attendanceService.getAttendanceDatesList();
      return { attendanceDateList, userInfo };
    } catch (error) {
      throw error;
    }
  }
}
