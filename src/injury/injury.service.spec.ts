import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { PrismaService } from 'src/prisma/prisma.service'
import { InjuryService } from './injury.service'

describe('InjuryService', () => {
  let service: InjuryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InjuryService, { provide: PrismaService, useValue: {} }]
    }).compile()

    service = module.get<InjuryService>(InjuryService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })
})
