import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  ParseIntPipe,
  Post,
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
import { RegisterManyAttendanceDTO } from './dto/registerManyAttendance.dto';
import { RegisterOneAttendanceDTO } from './dto/registerOneAttendance.dto';

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

  @Get('register')
  @Render('pages/attendance/register')
  async getAttendanceSurveyResultFiles(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const attendanceSurveyResultFiles =
        await this.attendanceService.getAttendanceSurveyResultFiles();
      return { attendanceSurveyResultFiles, userInfo };
    } catch (error) {
      throw error;
    }
  }

  @Post('register')
  @Render('back_with_msg')
  async registerOneAttendance(@Body() attendanceDTO: RegisterOneAttendanceDTO) {
    try {
      const { id } = await this.attendanceService.registerOneAttendance(
        attendanceDTO,
      );
      return { msg: `출석 등록에 성공했습니다.\\nid: ${id}` };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        Logger.log(error);
        throw new HttpException(
          '부원정보가 존재하지 않습니다.',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else {
        throw error;
      }
    }
  }

  @Get('register/many')
  @Render('pages/attendance/register-many')
  async getRegisterManyAttendancePage(@Req() req: Request) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    return { userInfo };
  }

  @Get('register/many/:id')
  async getDetailAttendanceSurveyResult(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const userInfo: SessionUserInfo = req.session.userInfo;
    try {
      const data = await this.attendanceService.getDetailAttendanceSurveyResult(
        id,
      );
      return { userInfo, data };
    } catch (error) {
      throw error;
    }
  }

  @Post('register/many')
  async registerManyAttendances(
    @Body() attendanceDTO: RegisterManyAttendanceDTO,
  ) {
    try {
      const { count, success } =
        await this.attendanceService.registerManyAttendances(attendanceDTO);
      return { count, success };
    } catch (error) {
      throw error;
    }
  }
}
