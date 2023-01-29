import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterAttendanceRequestDTO } from './dto/registerAttendanceRequest.dto';

@Injectable()
export class ApiService {
  constructor(private readonly prismaService: PrismaService) {}

  async registerGoogleSheet(
    attendanceDTO: RegisterAttendanceRequestDTO,
  ): Promise<{ id: number }> {
    const registerResult = await this.prismaService.googleSheet.create({
      data: {
        records: attendanceDTO.attendances,
        columns: JSON.stringify(attendanceDTO.columnNames),
        sheetName: attendanceDTO.sheetName,
        createdAt: attendanceDTO.createdAt,
      },
      select: {
        id: true,
      },
    });

    return registerResult;
  }
}
