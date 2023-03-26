import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'
import { Prisma, SurveyGroup } from '@prisma/client'
import { Public } from 'src/auth/decorators/public.decorator'
import { SubmitSurveyDTO } from './dto/submitSurvey.dto'
import { SurveyService } from './survey.service'

@Public()
@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post('submit')
  async submitSurveys(
    @Body() surveyDTO: SubmitSurveyDTO
  ): Promise<{ count: number }> {
    return await this.surveyService.submitSurveys(surveyDTO)
  }

  @Get('list')
  async getSurveyList(): Promise<SurveyGroup[]> {
    return await this.surveyService.getSurveyList()
  }

  @Get(':id')
  async getSurveyModal(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.surveyService.getSurveyModal(id)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '출석조사 정보가 존재하지 않습니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }
}
