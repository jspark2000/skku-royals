import { Controller, Get, Render } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('admin/attendance')
export class AttendanceAdminController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('update')
  @Render('/pages/admin/attendance/update')
  async getAttendanceList() {
    return;
  }
}
