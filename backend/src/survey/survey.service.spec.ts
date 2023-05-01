import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { PrismaService } from 'src/prisma/prisma.service'
import { SurveyService } from './survey.service'

describe('SurveyService', () => {
  let service: SurveyService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyService, { provide: PrismaService, useValue: {} }]
    }).compile()

    service = module.get<SurveyService>(SurveyService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })
})
