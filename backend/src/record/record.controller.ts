import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common'
import { Prisma, Record, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { RegisterRecordDTO } from './dto/registerRecord.dto'
import { UpdateRecordDTO } from './dto/updateRecord.dto'
import { RecordService } from './record.service'

@Roles(Role.Normal)
@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get('people/:peopleId')
  async getPersonalRecords(
    @Param('peopleId', ParseIntPipe) peopleId: number
  ): Promise<Record[]> {
    try {
      return await this.recordService.getPersonalRecords(peopleId)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new HttpException(
            {
              message: '존재하지 않는 부원입니다',
              code: 102
            },
            HttpStatus.NOT_FOUND
          )
        }
      } else {
        throw error
      }
    }
  }

  @Post('people/:peopleId')
  async registerRecord(
    @Param('peopleId', ParseIntPipe) peopleId: number,
    @Body() recordDTO: RegisterRecordDTO
  ): Promise<{ id: number }> {
    try {
      return await this.recordService.registerRecord(peopleId, recordDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            {
              message: '이미 기록이 존재합니다.',
              code: 101
            },
            HttpStatus.CONFLICT
          )
        } else if (error.code === 'P2025') {
          throw new HttpException(
            {
              message: '존재하지 않는 부원입니다',
              code: 102
            },
            HttpStatus.NOT_FOUND
          )
        }
      } else {
        throw error
      }
    }
  }

  @Patch(':recordId')
  async updateRecord(
    @Param('recordId', ParseIntPipe) recordId: number,
    @Body() recordDTO: UpdateRecordDTO
  ): Promise<Record> {
    try {
      return this.recordService.updateRecord(recordId, recordDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new HttpException(
            {
              message: '존재하지 않는 부원입니다',
              code: 102
            },
            HttpStatus.NOT_FOUND
          )
        }
      } else {
        throw error
      }
    }
  }

  @Delete(':recordId')
  async deleteRecord(
    @Param('recordId', ParseIntPipe) recordId: number
  ): Promise<{ id: number }> {
    try {
      return await this.recordService.deleteRecord(recordId)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new HttpException(
            {
              message: '존재하지 않는 부원입니다',
              code: 102
            },
            HttpStatus.NOT_FOUND
          )
        }
      } else {
        throw error
      }
    }
  }
}
