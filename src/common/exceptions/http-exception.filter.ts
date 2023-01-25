import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (status === 401) {
      response.render('redirect_with_msg', {
        msg: '로그인이 필요한 서비스입니다.',
      });
    } else if (status === 403) {
      response.render('redirect_with_msg', { msg: '권한이 없습니다.' });
    } else {
      Logger.log({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
      response.render('redirect_with_msg', { msg: '알 수 없는 오류 발생.' });
    }
  }
}
