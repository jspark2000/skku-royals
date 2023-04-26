import { Module } from '@nestjs/common'
import { SurveyService } from './survey.service'
import { SurveyController } from './survey.controller'
import { AdminSurveyController } from './admin-survey.controller'

@Module({
  providers: [SurveyService],
  controllers: [SurveyController, AdminSurveyController]
})
export class SurveyModule {}
