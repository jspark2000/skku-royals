import { Module } from '@nestjs/common'
import { AttendanceAdminController } from './attedance-admin.controller'
import { AttendanceController } from './attendance.controller'
import { AttendanceService } from './attendance.service'

@Module({
  controllers: [AttendanceController, AttendanceAdminController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
