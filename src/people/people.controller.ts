import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('people')
export class PeopleController {
  @Get()
  getMainPage(@Res() res: Response) {
    return res.render('pages/people/main');
  }
}
