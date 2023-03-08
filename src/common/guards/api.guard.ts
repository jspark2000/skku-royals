import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { Request } from 'express'
import { Observable } from 'rxjs'

@Injectable()
export class APIGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    if (request.header('x-api-key') !== process.env.API_SECRET) {
      throw new HttpException('Permession Denied', HttpStatus.UNAUTHORIZED)
    }
    return true
  }
}
