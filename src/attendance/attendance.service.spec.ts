import { Test, TestingModule } from '@nestjs/testing'
import { AttendanceService } from './attendance.service'
import { expect } from 'chai'
import { PrismaService } from 'src/prisma/prisma.service'

describe('AttendanceService', () => {
  let service: AttendanceService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceService, { provide: PrismaService, useValue: {} }]
    }).compile()

    service = module.get<AttendanceService>(AttendanceService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })
})
