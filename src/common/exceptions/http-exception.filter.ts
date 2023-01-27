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
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | null };
    const msg = `[Status Code: ${status}]\\n${exception.getResponse()}`;

    if (typeof error !== 'string') {
      if (error.statusCode === 404) {
        response.status(status).render('redirect_with_msg', {
          msg: `[Status Code: 404]\\n존재하지 않는 페이지입니다.`,
        });
      } else {
        response.status(status).render('redirect_with_msg', {
          msg: `[Status Code: ${error.statusCode}]\\n${error.message}`,
        });
      }
    } else {
      response.status(status).render('redirect_with_msg', { msg });
    }
  }
}
