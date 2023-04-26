import { Injectable } from '@nestjs/common'
import { Record } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { RegisterRecordDTO } from './dto/registerRecord.dto'
import { UpdateRecordDTO } from './dto/updateRecord.dto'

@Injectable()
export class RecordService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPersonalRecords(peopleId: number): Promise<Record[]> {
    const check = await this.prismaService.people.findFirstOrThrow({
      where: {
        id: peopleId
      }
    })

    const records = await this.prismaService.record.findMany({
      where: {
        People: {
          uid: check.uid
        }
      }
    })

    return records
  }

  async registerRecord(
    peopleId: number,
    recordDTO: RegisterRecordDTO
  ): Promise<{ id: number }> {
    const result = await this.prismaService.record.create({
      data: {
        People: {
          connect: {
            id: peopleId
          }
        },
        ...recordDTO
      },
      select: {
        id: true
      }
    })

    return result
  }

  async updateRecord(
    recordId: number,
    recordDTO: UpdateRecordDTO
  ): Promise<Record> {
    return await this.prismaService.record.update({
      where: {
        id: recordId
      },
      data: {
        ...recordDTO
      }
    })
  }

  async deleteRecord(recordId: number): Promise<{ id: number }> {
    return await this.prismaService.record.delete({
      where: {
        id: recordId
      },
      select: {
        id: true
      }
    })
  }
}
