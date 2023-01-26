import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { PeopleService } from './people.service';

@Controller('people')
@UseGuards(AuthGuard)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  @Render('pages/people/main')
  getMainPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;

    return { userInfo };
  }

  @Get('list')
  @Render('pages/people/list')
  async getPeopleList(@Req() req: Request) {
    try {
      const userInfo: SessionUserInfo = req.session.userInfo;
      const peopleList = await this.peopleService.getPeopleList();

      return { userInfo, peopleList };
    } catch (error) {
      throw error;
    }
  }
}
