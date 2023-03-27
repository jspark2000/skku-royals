import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'
import { Prisma, Role, SurveyGroup } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { NotSubmittedDTO } from './dto/notSubmitted.dto'
import { RegisterSeparateSurveyDTO } from './dto/registerSeparateSurvey.dto'
import { registerSurveysDTO } from './dto/registerSurveys.dto'
import { SurveyService } from './survey.service'

@Roles(Role.Admin)
@Controller('admin/survey')
export class AdminSurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post('create')
  async registerSurveys(@Body() surveyDTO: registerSurveysDTO) {
    return await this.surveyService.registerSurveys(surveyDTO)
  }

  @Get(':id/not-submitted')
  async getNotSubmittedList(
    @Param('id', ParseIntPipe) id: number
  ): Promise<NotSubmittedDTO[]> {
    try {
      return await this.surveyService.getNotSubmittedList(id)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 출석조사 정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }

  @Post('separate')
  async registerSeparateSurvey(@Body() surveyDTO: RegisterSeparateSurveyDTO) {
    try {
      return await this.surveyService.registerSeparateSurvey(surveyDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 부원 정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }

  @Delete(':id')
  async deleteSurveys(
    @Param('id', ParseIntPipe) id: number
  ): Promise<SurveyGroup> {
    try {
      return await this.surveyService.deleteSurveys(id)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 출석조사 정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }
}
