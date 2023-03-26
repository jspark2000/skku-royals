import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { People } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { PeopleUpdateDTO } from './dto/peopleUpdate.dto'
import { RegisterPeopleDTO } from './dto/registerPeople.dto'

@Injectable()
export class PeopleService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPeopleModal(id: number): Promise<People> {
    const peopleModal = await this.prismaService.people.findUnique({
      where: {
        id
      }
    })

    if (!peopleModal) {
      throw new HttpException(
        {
          message: '해당하는 부원이 존재하지 않습니다.',
          code: 100
        },
        HttpStatus.NOT_FOUND
      )
    }

    return peopleModal
  }

  async getPeopleList(): Promise<People[]> {
    const peopleList = await this.prismaService.people.findMany({
      orderBy: [{ newbie: 'asc' }, { studentNo: 'asc' }, { name: 'asc' }]
    })

    if (peopleList.length === 0) {
      throw new HttpException(
        {
          message: '데이터베이스에서 정보를 불러오는데 실패했습니다.',
          code: 100
        },
        HttpStatus.NOT_FOUND
      )
    }

    return peopleList
  }

  async updatePeople(id: number, peopleDTO: PeopleUpdateDTO) {
    const result = await this.prismaService.people.update({
      where: {
        id
      },
      data: {
        ...peopleDTO
      },
      select: {
        id: true
      }
    })

    if (!result) {
      throw new HttpException(
        { message: '해당하는 부원 정보가 없습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async deletePeople(id: number) {
    return await this.prismaService.people.delete({
      where: {
        id
      },
      select: {
        id: true
      }
    })
  }

  async registerPeople(peopleDTO: RegisterPeopleDTO) {
    const check = await this.prismaService.people.findFirst({
      where: {
        name: peopleDTO.name,
        studentNo: peopleDTO.studentNo
      }
    })

    if (check) {
      throw new HttpException(
        { message: '이미 존재하는 부원입니다.', code: 100 },
        HttpStatus.CONFLICT
      )
    }

    const result = await this.prismaService.people.create({
      data: {
        ...peopleDTO,
        newbie: true,
        attendanceTarget: true,
        absence: false,
        year: new Date().getFullYear()
      },
      select: {
        id: true
      }
    })

    if (!result) {
      throw new HttpException(
        { message: '서버 오류 발생', code: 100 },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    return result
  }
}
