import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AdminGuard } from 'src/common/guards/admin.guard';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('people')
@UseGuards(AuthGuard)
export class PeopleController {
  @Get()
  @UseGuards(AdminGuard)
  getMainPage(@Res() res: Response) {
    res.render('pages/people/main');
  }
}
