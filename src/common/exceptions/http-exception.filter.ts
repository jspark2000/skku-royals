import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const msg = `[Status: ${status}] ${exception.getResponse()}`;

    if (status === 404) {
      response.render('redirect_with_msg', {
        msg: '[Status: 404] 존재하지 않는 페이지입니다.',
      });
    } else {
      response.render('redirect_with_msg', { msg });
    }
  }
}
