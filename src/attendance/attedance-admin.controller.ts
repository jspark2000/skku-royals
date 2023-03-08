import { Controller } from '@nestjs/common'
import { AttendanceService } from './attendance.service'

@Controller('admin/attendance')
export class AttendanceAdminController {
  constructor(private readonly attendanceService: AttendanceService) {}
}
