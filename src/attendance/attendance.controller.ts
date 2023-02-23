import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-request.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AttendanceService } from './attendance.service';
import { AttendanceDateDTO } from './dto/attendanceDate.dto';
import { attendanceRegisterDTO } from './dto/attendanceRegister.dto';

@Roles('normal')
@Controller('attendance')
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

  @Get('register')
  async getGoogleSheetList() {
    return await this.attendanceService.getGoogleSheetList();
  }

  @Post('register')
  async registerAttendances(@Body() attendanceDTO: attendanceRegisterDTO[]) {
    const { count } = await this.attendanceService.registerAttendances(
      attendanceDTO,
    );
    return count;
  }

  @Get(':date')
  async getAttendances(@Param() attendanceDTO: AttendanceDateDTO) {
    return await this.attendanceService.getAttendances(attendanceDTO);
  }
}
