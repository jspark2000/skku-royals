import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { AuthenticatedUser } from '../class/authenticated-user.class'
import { JwtObject } from '../interfaces/jwt.interface'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload: JwtObject) {
    const authenticatedUser = new AuthenticatedUser(payload.username)

    const role = await this.prisma.bandUser.findFirst({
      where: {
        username: payload.username
      },
      select: {
        role: true
      }
    })

    authenticatedUser.role = role.role

    return authenticatedUser
  }
}
