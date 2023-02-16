import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-request.interface';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.getAllAndOverride<string>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (role === 'newbie') {
      return true;
    }

    const request: AuthenticatedRequest = context.switchToHttp().getRequest();

    if (role === 'superAdmin') {
      return request.user.role === 'superAdmin' ? true : false;
    }

    if (role === 'admin') {
      if (request.user.isSuperAdmin() || request.user.isAdmin()) return true;
      return false;
    }

    if (role === 'normal') {
      if (request.user.isSuperAdmin() || request.user.isAdmin()) return true;
      if (request.user.role === 'normal') return true;
      return false;
    }

    return false;
  }
}
