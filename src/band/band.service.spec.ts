import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { PrismaService } from 'src/prisma/prisma.service'
import { BandService } from './band.service'

describe('BandService', () => {
  let service: BandService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandService, { provide: PrismaService, useValue: {} }]
    }).compile()

    service = module.get<BandService>(BandService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })
})
