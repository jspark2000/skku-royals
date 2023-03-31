import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Patch
} from '@nestjs/common'
import { AttendanceService } from './attendance.service'
import { Roles } from 'src/common/decorators/roles.decorator'
import { Attendance, Prisma, Role } from '@prisma/client'
import { AttendanceUpdateDTO } from './dto/attendanceUpdate.dto'

@Roles(Role.Admin)
@Controller('admin/attendance')
export class AttendanceAdminController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('list')
  async getCurrentAttendances(): Promise<
    (Attendance & { People: { name: string; studentNo: number } })[]
  > {
    return await this.attendanceService.getCurrentAttendances()
  }

  @Patch('update')
  async updateAttendance(
    @Body() attendanceDTO: AttendanceUpdateDTO
  ): Promise<Attendance> {
    try {
      return this.attendanceService.updateAttendance(attendanceDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 출석 정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }
}
