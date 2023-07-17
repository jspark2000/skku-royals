import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common'
import { Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { StatisticService } from './statistic.service'
import { GetAttendanceStatisticsDTO } from './dto/getAttendanceStatistics.dto'

@Roles(Role.Normal)
@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Get('people/all')
  async getPeopleAttendanceStatistics(
    @Query() statisticDTO: GetAttendanceStatisticsDTO
  ) {
    return await this.statisticService.getPeopleAttendanceStatistics(
      statisticDTO
    )
  }

  @Get('people/:id')
  async getIndividualAttendanceStatistics(
    @Param('id', ParseIntPipe) id: number
  ) {
    return await this.statisticService.getIndividualAttendanceStatistics(id)
  }

  @Get(':date')
  async getDailyReport(@Param('date') date: string) {
    return await this.statisticService.issueDailyReport(date)
  }

  @Get('survey/:date')
  async getDailySurveyReport(@Param('date') date: string) {
    return await this.statisticService.issueDailySurveyReport(date)
  }

  @Get('position/:date')
  async getDailyPositionCounts(@Param('date') date: string) {
    return await this.statisticService.getDailyPositionCounts(date)
  }
}
