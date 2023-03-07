import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Req,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-request.interface';
import { Roles } from 'src/common/decorators/roles.decorator';
import { BandService } from './band.service';
import { UpdateRoleDTO } from './dto/updateRole.dto';

@Roles(Role.Newbie)
@Controller('band')
export class BandController {
  constructor(private readonly bandService: BandService) {}

  @Get('user/list')
  @Roles(Role.Admin)
  async getBandUserList() {
    return await this.bandService.getBandUserList();
  }

  @Get('profile')
  async getMyProfile(@Req() req: AuthenticatedRequest) {
    return await this.bandService.getBandProfile(req.user.userKey);
  }

  @Get('profile/:userKey')
  async getProfile(@Param('userKey') userKey: string) {
    return await this.bandService.getBandProfile(userKey);
  }

  @Patch('role')
  @Roles(Role.Admin)
  async updateRole(
    @Body() bandDTO: UpdateRoleDTO,
    @Req() req: AuthenticatedRequest,
  ) {
    return await this.bandService.updateRole(bandDTO, req.user.role);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.bandService.deleteUser(id);
  }
}
