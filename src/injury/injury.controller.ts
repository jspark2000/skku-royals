import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common'
import { Injury, Prisma, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { InjuryResponseDTO } from './dto/injuryResponse.dto'
import { RegisterInjuryDTO } from './dto/registerInjury.dto'
import { UpdateInjuryInfoDTO } from './dto/updateInjury.dto'
import { InjuryService } from './injury.service'

@Roles(Role.Normal)
@Controller('injury')
export class InjuryController {
  constructor(private readonly injuryService: InjuryService) {}

  @Post('')
  async registerInjury(@Body() injuryDTO: RegisterInjuryDTO): Promise<Injury> {
    try {
      return await this.injuryService.registerInjury(injuryDTO)
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new HttpException(
          { message: '존재하지 않는 부원입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }

  @Patch(':id')
  async updateInjuryInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() injuryDTO: UpdateInjuryInfoDTO
  ): Promise<Injury> {
    return await this.injuryService.updateInjuryInfo(id, injuryDTO)
  }

  @Get('all')
  async getAllCurrentlyInjured(): Promise<InjuryResponseDTO[]> {
    return await this.injuryService.getAllCurrentlyInjured()
  }
}
