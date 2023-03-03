import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
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

    if (role === undefined) {
      return true;
    }

    if (role === Role.Newbie) {
      return true;
    }

    const request: AuthenticatedRequest = context.switchToHttp().getRequest();

    if (role === Role.SuperAdmin) {
      return request.user.role === Role.SuperAdmin ? true : false;
    }

    if (role === Role.Admin) {
      if (request.user.isSuperAdmin() || request.user.isAdmin()) return true;
      return false;
    }

    if (role === Role.Normal) {
      if (request.user.isSuperAdmin() || request.user.isAdmin()) return true;
      if (request.user.role === Role.Normal) return true;
      return false;
    }

    return false;
  }
}
