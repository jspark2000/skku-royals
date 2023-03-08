import { Test, TestingModule } from '@nestjs/testing'
import { AttendanceController } from './attendance.controller'
import { ConfigService } from '@nestjs/config'
import { expect } from 'chai'
import { AttendanceService } from './attendance.service'
import { AttendanceAdminController } from './attedance-admin.controller'

describe('AttendanceController', () => {
  let controller: AttendanceController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceController, AttendanceAdminController],
      providers: [ConfigService, { provide: AttendanceService, useValue: {} }]
    }).compile()

    controller = module.get<AttendanceController>(AttendanceController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
