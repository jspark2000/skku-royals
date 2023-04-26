import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from '@nestjs/common'
import { Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const error = exception.getResponse() as
      | string
      | {
          error: string
          statusCode: number
          message?: string | undefined
          code?: number | undefined
        }

    if (status === 403) {
      response.status(403).json({
        statusCode: 403,
        message: '접근 권한이 없습니다.',
        code: 100
      })
    } else {
      if (typeof error === 'string') {
        response.status(status).json(error)
      } else {
        response.status(status).json({
          statusCode: status,
          message: error.message,
          code: error.code
        })
      }
    }
  }
}
