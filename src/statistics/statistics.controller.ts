import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { PeopleService } from 'src/people/people.service';
import { StatisticsService } from './statistics.service';

@UseGuards(AdminGuard)
@Controller('admin/statistics')
export class StatisticsController {
  constructor(
    private readonly statisticsService: StatisticsService,
    private readonly peopleService: PeopleService,
  ) {}

  @Get('position')
  @Render('pages/admin/statistics/position')
  async getMonthlyStatisticsPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    return { userInfo };
  }

  @Get('personal')
  @Render('pages/admin/statistics/personal')
  async getPersonalStatisticsPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const peopleList = await this.peopleService.getPeopleList();
      return { userInfo, peopleList };
    } catch (error) {
      throw error;
    }
  }

  @Get('personal/:id')
  async showPersonalStatistics(@Param('id', ParseIntPipe) id: number) {
    try {
      const statistics = await this.statisticsService.getPersonalStatistics(id);
      return { ...statistics };
    } catch (error) {
      throw error;
    }
  }
}
