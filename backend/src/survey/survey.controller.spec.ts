import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { AdminSurveyController } from './admin-survey.controller'
import { SurveyController } from './survey.controller'
import { SurveyService } from './survey.service'

describe('SurveyController', () => {
  let controller: SurveyController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyController, AdminSurveyController],
      providers: [{ provide: SurveyService, useValue: {} }]
    }).compile()

    controller = module.get<SurveyController>(SurveyController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
