import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Query,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { SessionUserInfo } from 'src/common/interfaces/sessionUserInfo.interface';
import { AttendanceService } from './attendance.service';
import { AttendanceCheckRequestDTO } from './dto/attendanceCheckRequest.dto';
import { DailyAttendancesRequestDTO } from './dto/dailyAttendancesRequest.dto';

@Controller('attendance')
@UseGuards(AuthGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  @Render('pages/attendance/main')
  getMainPage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;

    return { userInfo };
  }

  @Get('list')
  @Render('pages/attendance/list')
  async getAttendanceDatesList(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const dates = await this.attendanceService.getAttendanceDatesList();
      return { userInfo, dates };
    } catch (error) {
      throw error;
    }
  }

  @Get('list/detail')
  @Render('pages/attendance/list-detail')
  async getDailyAttendances(
    @Req() req: Request,
    @Query() attendanceDTO: DailyAttendancesRequestDTO,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const dailyAttendances = await this.attendanceService.getDailyAttendances(
        attendanceDTO,
      );

      return { userInfo, ...dailyAttendances };
    } catch (error) {
      throw error;
    }
  }

  @Get('list/check')
  @Render('pages/attendance/check')
  async getDailyAttendanceChecklist(
    @Req() req: Request,
    @Query() attendanceDTO: DailyAttendancesRequestDTO,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const dailyAttendances = await this.attendanceService.getDailyAttendances(
        attendanceDTO,
      );

      return { userInfo, ...dailyAttendances };
    } catch (error) {
      throw error;
    }
  }

  @Put('list/check')
  async attendanceCheck(
    @Req() req: Request,
    @Body() attendanceDTO: AttendanceCheckRequestDTO,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const { id } = await this.attendanceService.attendanceCheck(
        attendanceDTO,
      );

      return {
        userInfo,
        success: true,
        id,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          '출석 체크에 실패했습니다.',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else {
        throw error;
      }
    }
  }
}
