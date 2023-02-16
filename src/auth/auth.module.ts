import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthAdminController } from './auth-admin.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        const options: JwtModuleOptions = {
          secret: process.env.JWT_SECRET,
        };
        return options;
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController, AuthAdminController],
  exports: [AuthService],
})
export class AuthModule {}
