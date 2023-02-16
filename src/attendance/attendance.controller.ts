import { Controller, Get, Param, Req } from '@nestjs/common';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-request.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AttendanceService } from './attendance.service';
import { AttendanceDateDTO } from './dto/attendanceDate.dto';

@Controller('attendance')
@Roles('normal')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('date-list')
  async getAttendanceDateList() {
    return await this.attendanceService.getAttendanceDateList();
  }

  @Get('recent')
  async getRecentAttendances(@Req() req: AuthenticatedRequest) {
    return await this.attendanceService.getRecentAttendances(req.user.userKey);
  }

  @Get(':date')
  async getAttendances(@Param() attendanceDTO: AttendanceDateDTO) {
    return await this.attendanceService.getAttendances(attendanceDTO);
  }
}
