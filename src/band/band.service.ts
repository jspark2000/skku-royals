import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable
} from '@nestjs/common'
import { Role } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateRoleDTO } from './dto/updateRole.dto'

@Injectable()
export class BandService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBandUserList() {
    const bandUserList = await this.prismaService.bandUser.findMany({
      select: {
        id: true,
        profileUrl: true,
        userNickname: true,
        role: true
      }
    })

    if (bandUserList.length === 0) {
      throw new HttpException(
        '밴드 계정 정보를 불러오는데 실패했습니다.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    return bandUserList.map((bandUser) => {
      return {
        id: bandUser.id,
        profileUrl: bandUser.profileUrl,
        userNickname: bandUser.userNickname,
        role: bandUser.role
      }
    })
  }

  async getBandProfile(userKey: string) {
    const profile = await this.prismaService.bandUser.findUnique({
      where: {
        userKey
      },
      select: {
        userNickname: true,
        profileUrl: true,
        role: true
      }
    })

    if (!profile) {
      throw new HttpException(
        '프로필 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY
      )
    }

    return profile
  }

  async updateRole(bandDTO: UpdateRoleDTO, role: Role) {
    if (role === Role.Admin) {
      if (bandDTO.role === Role.Admin || bandDTO.role === Role.SuperAdmin) {
        throw new BadRequestException(
          'Admin 권한 이상으로의 변경은 SuperAdmin만 가능합니다.'
        )
      }
    }

    const superAdminCheck = await this.prismaService.bandUser.findUnique({
      where: {
        id: bandDTO.id
      },
      select: {
        role: true
      }
    })

    if (superAdminCheck.role === Role.SuperAdmin) {
      throw new BadRequestException(
        'SuperAdmin의 권한은 임의로 변경할 수 없습니다.'
      )
    }

    return await this.prismaService.bandUser.update({
      where: {
        id: bandDTO.id
      },
      data: {
        userNickname: bandDTO.name,
        role: Role[bandDTO.role]
      },
      select: {
        id: true,
        role: true,
        userNickname: true
      }
    })
  }

  async deleteUser(id: number) {
    const adminCheck = await this.prismaService.bandUser.findUnique({
      where: {
        id
      },
      select: {
        role: true
      }
    })

    if (adminCheck.role === Role.Admin || adminCheck.role === Role.SuperAdmin) {
      throw new BadRequestException(
        'Admin 이상의 권한을 가진 유저는 삭제할 수 없습니다.'
      )
    }

    return await this.prismaService.bandUser.delete({
      where: {
        id
      },
      select: {
        id: true
      }
    })
  }
}
