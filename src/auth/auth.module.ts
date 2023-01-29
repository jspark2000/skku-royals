import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthAdminController } from './auth-admin.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController, AuthAdminController],
})
export class AuthModule {}
