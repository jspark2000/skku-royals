import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Injury } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { InjuryResponseDTO } from './dto/injuryResponse.dto'
import { RegisterInjuryDTO } from './dto/registerInjury.dto'
import { UpdateInjuryInfoDTO } from './dto/updateInjury.dto'

@Injectable()
export class InjuryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCurrentlyInjured(): Promise<InjuryResponseDTO[]> {
    const injuries = await this.prismaService.injury
      .findMany({
        where: {
          AND: [
            { startDate: { lte: new Date() }, endDate: { gte: new Date() } }
          ]
        },
        select: {
          description: true,
          startDate: true,
          endDate: true,
          People: {
            select: {
              name: true,
              studentNo: true
            }
          }
        }
      })
      .then((results) =>
        results.map((result) => {
          return {
            name: result.People.name,
            studentNo: result.People.studentNo,
            description: result.description,
            startDate: result.startDate,
            endDate: result.endDate
          }
        })
      )

    return injuries
  }

  async registerInjury(injuryDTO: RegisterInjuryDTO): Promise<Injury> {
    const check = await this.prismaService.injury.findFirst({
      where: {
        peopleId: injuryDTO.peopleId,
        OR: [
          {
            AND: [
              { startDate: { gte: injuryDTO.startDate } },
              { startDate: { lt: injuryDTO.endDate } }
            ]
          },
          {
            AND: [
              { endDate: { gt: injuryDTO.startDate } },
              { endDate: { lte: injuryDTO.endDate } }
            ]
          },
          {
            AND: [
              { startDate: { lte: injuryDTO.startDate } },
              { endDate: { gte: injuryDTO.endDate } }
            ]
          }
        ]
      }
    })

    if (check) {
      throw new HttpException(
        { message: '이미 부상정보가 등록되어있습니다', code: 100 },
        HttpStatus.CONFLICT
      )
    }

    return await this.prismaService.injury.create({
      data: {
        ...injuryDTO
      }
    })
  }

  async updateInjuryInfo(
    id: number,
    injuryDTO: UpdateInjuryInfoDTO
  ): Promise<Injury> {
    const check = await this.prismaService.injury.findFirst({
      where: {
        id
      }
    })

    if (!check) {
      throw new HttpException(
        { message: '부상정보가 존재하지 않습니다', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    return await this.prismaService.injury.update({
      where: {
        id
      },
      data: {
        ...injuryDTO
      }
    })
  }
}
