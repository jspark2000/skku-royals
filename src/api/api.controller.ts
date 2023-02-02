import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { APIGuard } from 'src/common/guards/api.guard';
import { ApiService } from './api.service';
import { RegisterAttendanceRequestDTO } from './dto/registerAttendanceRequest.dto';

@Controller('api')
@UseGuards(APIGuard)
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  
  @Get('test')
  async test(
  ) {
    return { sucess: true };
  }

  @Post('attendance')
  async registerGoogleSheet(
    @Body() attendanceDTO: RegisterAttendanceRequestDTO,
  ) {
    try {
      const { id } = await this.apiService.registerGoogleSheet(attendanceDTO);
      return { id, success: true };
    } catch (error) {
      throw error;
    }
  }
}
