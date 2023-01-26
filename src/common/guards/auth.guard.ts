import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    if (!request.session.authed)
      throw new HttpException(
        '로그인이 필요합니다.',
        HttpStatusCode.Unauthorized,
      );
    return true;
  }
}
