import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Render,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Roles } from 'src/common/decorators/roles.decorator';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { PeopleUpdateDTO } from './dto/peopleUpdate.dto';
import { RegisterPeopleDTO } from './dto/registerPeople.dto';
import { RegisterPeopleRequestDTO } from './dto/registerPeopleRequest.dto';
import { PeopleService } from './people.service';

@Roles('admin')
@Controller('admin/people')
export class PeopleAdminController {
  constructor(private readonly peopleService: PeopleService) {}

  // @Get('register')
  // @Render('pages/admin/people/register')
  // async getPeopleRegisterPage(@Req() req: Request) {
  //   const userInfo: SessionUserInfo = req.session.userInfo;
  //   try {
  //     const bandUserList = await this.authService.getBandUserList();
  //     return { bandUserList, userInfo };
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  @Get(':id')
  async getPeopleModal(@Param('id', ParseIntPipe) id: number) {
    return await this.peopleService.getPeopleModal(id);
  }

  @Patch(':id')
  async updatePeople(
    @Param('id', ParseIntPipe) id: number,
    @Body() peopleDTO: PeopleUpdateDTO,
  ) {
    return await this.peopleService.updatePeople(id, peopleDTO);
  }

  @Post()
  async registerPeople(@Body() peopleDTO: RegisterPeopleDTO) {
    return await this.peopleService.registerPeople(peopleDTO);
  }

  @Get('update')
  @Render('pages/admin/people/update')
  async getPeopleUpdatePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    // eslint-disable-next-line no-useless-catch
    try {
      const peopleList = await this.peopleService.getPeopleListWithUid();
      return { peopleList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Get('delete')
  @Render('pages/admin/people/delete')
  async getPeopleDeletePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    // eslint-disable-next-line no-useless-catch
    try {
      const peopleList = await this.peopleService.getPeopleListWithUid();
      return { peopleList, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Delete('delete')
  async deletePeople(@Body('uid') uid: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await this.peopleService.deletePeople(uid);
      return { result, success: true };
    } catch (error) {
      throw error;
    }
  }
}
