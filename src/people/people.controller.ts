import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { AlterPositionRequestDTO } from './dto/alterPositionRequest.dto';
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

  @Get('position')
  @Render('pages/people/position')
  getPositionAlterForm(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    return { userInfo };
  }

  @Post('position')
  @Render('redirect_with_msg')
  async alterPosition(
    @Body() alterPositionRequestDTO: AlterPositionRequestDTO,
  ) {
    try {
      await this.peopleService.alterPosition(alterPositionRequestDTO);

      return { msg: '업데이트에 성공했습니다.' };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new HttpException(
            '일치하는 부원 정보가 없습니다.',
            HttpStatus.BAD_REQUEST,
          );
        } else {
          throw new HttpException(
            '업데이트에 실패했습니다.',
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }
      } else {
        throw error;
      }
    }
  }
}
