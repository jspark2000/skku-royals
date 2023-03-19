import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common'
import { Injury, Role } from '@prisma/client'
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
    return await this.injuryService.registerInjury(injuryDTO)
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
