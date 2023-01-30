import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { RegisterPeopleRequestDTO } from './dto/registerPeopleRequest.dto';
import { UpdatePeopleRequestDTO } from './dto/updatePeopleRequest.dto';
import { PeopleService } from './people.service';

@Controller('admin/people')
@UseGuards(AdminGuard)
export class PeopleAdminController {
  constructor(
    private readonly peopleService: PeopleService,
    private readonly authService: AuthService,
  ) {}

  @Get('register')
  @Render('pages/admin/people/register')
  async getPeopleRegisterPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const bandUserList = await this.authService.getBandUserList();
      return { bandUserList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Post('register')
  @Render('back_with_msg')
  async registerPeople(@Body() peopleDTO: RegisterPeopleRequestDTO) {
    try {
      const { uid } = await this.peopleService.registerPeople(peopleDTO);
      return { msg: `부원 등록에 성공했습니다.\\nuid: ${uid}` };
    } catch (error) {
      throw error;
    }
  }

  @Get('update')
  @Render('pages/admin/people/update')
  async getPeopleUpdatePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const peopleList = await this.peopleService.getPeopleListWithUid();
      return { peopleList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Put('update')
  async updatePeople(@Body() peopleDTO: UpdatePeopleRequestDTO) {
    try {
      const { uid } = await this.peopleService.updatePeople(peopleDTO);
      return { uid, success: true };
    } catch (error) {
      throw error;
    }
  }

  @Get('delete')
  @Render('pages/admin/people/delete')
  async getPeopleDeletePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const peopleList = await this.peopleService.getPeopleListWithUid();
      return { peopleList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete')
  async deletePeople(@Body('uid') uid: string) {
    try {
      const result = await this.peopleService.deletePeople(uid);
      return { result, success: true };
    } catch (error) {
      throw error;
    }
  }
}
