import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt'
import { JwtObject, JwtPayload, JwtTokens } from './interfaces/jwt.interface'
import {
  ACCESS_TOKEN_EXPIRATION_SEC,
  REFRESH_TOKEN_EXPIRATION_SEC
} from './constants/jwt.constants'
import { Cache } from 'cache-manager'
import { refreshTokenCacheKey } from 'src/common/cache/keys'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { LoginUserDto } from './dto/loginUser.dto'
import { hash, verify } from 'argon2'
import { RegisterDTO } from './dto/register.dto'
import { Role } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  async issueJwtTokens(userDTO: LoginUserDto): Promise<JwtTokens> {
    const user = await this.prismaService.bandUser.findFirst({
      where: {
        username: userDTO.username
      }
    })

    if (!user) {
      throw new BadRequestException('해당하는 유저가 존재하지 않습니다.')
    }

    if (!(await this.verifyLogin(user.password, userDTO.password))) {
      throw new BadRequestException('비밀번호가 일치하지 않습니다.')
    }

    const payload: JwtPayload = { username: user.username, email: user.email }

    const accessToken = await this.jwtService.signAsync(
      {
        ...payload
      },
      {
        expiresIn: ACCESS_TOKEN_EXPIRATION_SEC
      }
    )
    const refreshToken = await this.jwtService.signAsync(
      {
        ...payload
      },
      {
        expiresIn: REFRESH_TOKEN_EXPIRATION_SEC
      }
    )

    await this.cacheManager.set(
      refreshTokenCacheKey(user.username),
      refreshToken,
      REFRESH_TOKEN_EXPIRATION_SEC * 1000
    )

    const id = await this.prismaService.bandUser.findFirst({
      where: {
        username: userDTO.username
      },
      select: {
        id: true
      }
    })

    await this.prismaService.bandUser.update({
      where: {
        id: id.id
      },
      data: {
        lastActive: new Date()
      }
    })

    return { accessToken, refreshToken }
  }

  async updateJwtTokens(refreshToken: string): Promise<JwtTokens> {
    const { username, email } = await this.verifyJwtToken(refreshToken)
    if (!(await this.isValidRefreshToken(refreshToken, username))) {
      throw new BadRequestException('다른기기에서 로그인 했습니다.')
    }
    return await this.createJwtTokens(username, email)
  }

  async createJwtTokens(username: string, email: string): Promise<JwtTokens> {
    const payload: JwtPayload = { username, email }
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: ACCESS_TOKEN_EXPIRATION_SEC
    })
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: REFRESH_TOKEN_EXPIRATION_SEC
    })

    await this.cacheManager.set(
      refreshTokenCacheKey(username),
      refreshToken,
      REFRESH_TOKEN_EXPIRATION_SEC * 1000 // milliseconds
    )

    return { accessToken, refreshToken }
  }

  async register(registerDTO: RegisterDTO): Promise<JwtTokens> {
    const duplicateUsername = await this.prismaService.bandUser.findFirst({
      where: {
        username: registerDTO.username
      }
    })

    if (duplicateUsername) {
      throw new ConflictException('이미 존재하는 아이디입니다.')
    }

    const duplicateEmail = await this.prismaService.bandUser.findFirst({
      where: {
        email: registerDTO.email
      }
    })

    if (duplicateEmail) {
      throw new ConflictException('이미 존재하는 이메일입니다.')
    }

    const validInviteCode = await this.verifyInviteCode(registerDTO.inviteCode)

    if (!validInviteCode) {
      throw new BadRequestException('초대코드가 유효하지 않습니다.')
    }

    const hashedPassword = await hash(registerDTO.password)

    const registerResult = await this.prismaService.bandUser.create({
      data: {
        username: registerDTO.username,
        password: hashedPassword,
        realname: registerDTO.realname,
        email: registerDTO.email,
        lastActive: new Date(),
        role: Role.SuperAdmin
      },
      select: {
        username: true,
        email: true
      }
    })

    return await this.createJwtTokens(
      registerResult.username,
      registerResult.email
    )
  }

  async verifyJwtToken(
    token: string,
    options: JwtVerifyOptions = {}
  ): Promise<JwtObject> {
    const jwtVerifyOptions = {
      secret: process.env.JWT_SECRET,
      ...options
    }
    try {
      return await this.jwtService.verifyAsync(token, jwtVerifyOptions)
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async isValidRefreshToken(refreshToken: string, userKey: string) {
    const cachedRefreshToken = await this.cacheManager.get(
      refreshTokenCacheKey(userKey)
    )
    if (cachedRefreshToken !== refreshToken) {
      return false
    }
    return true
  }

  async deleteRefreshToken(username: string) {
    return await this.cacheManager.del(refreshTokenCacheKey(username))
  }

  async getInviteCode(): Promise<string> {
    let inviteCode: string = await this.cacheManager.get('invite-code')

    if (!inviteCode) {
      inviteCode = Math.random().toString(36).substring(2, 12)
      await this.cacheManager.set(
        'invite-code',
        inviteCode,
        24 * 60 * 60 * 1000
      )
    }

    return inviteCode
  }

  private async verifyInviteCode(inviteCode: string): Promise<boolean> {
    const origin = await this.getInviteCode()
    return inviteCode === origin
  }

  private async verifyLogin(
    password: string,
    userinput: string
  ): Promise<boolean> {
    if (!(await verify(password, userinput))) {
      return false
    }
    return true
  }
}
