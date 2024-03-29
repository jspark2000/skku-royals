import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { AttendanceService } from './attendance.service'
import { AttendanceCheckDTO } from './dto/attendanceCheck.dto'
import { AttendanceDateDTO } from './dto/attendanceDate.dto'
import { AttendanceDeleteDTO } from './dto/attendanceDelete.dto'
import { RegisterAttendancesDTO } from './dto/attendanceRegister.dto'

@Controller('attendance')
@Roles(Role.Normal)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('date-list')
  async getAttendanceDateList() {
    return await this.attendanceService.getAttendanceDateList()
  }

  @Post('register')
  @Roles(Role.Admin)
  async registerAttendances(@Body() attendanceDTO: RegisterAttendancesDTO) {
    const { count } = await this.attendanceService.registerAttendances(
      attendanceDTO
    )
    return count
  }

  @Put('check')
  @Roles(Role.Normal)
  async checkAttendance(@Body() attendanceDTO: AttendanceCheckDTO) {
    return await this.attendanceService.checkAttendance(attendanceDTO)
  }

  @Delete()
  @Roles(Role.Admin)
  async deleteAttendances(@Body() attendanceDTO: AttendanceDeleteDTO) {
    return await this.attendanceService.deleteAttendances(attendanceDTO)
  }

  @Get(':date')
  async getAttendances(@Param() attendanceDTO: AttendanceDateDTO) {
    return await this.attendanceService.getAttendances(attendanceDTO)
  }
}
