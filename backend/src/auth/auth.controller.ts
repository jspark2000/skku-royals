import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UnauthorizedException
} from '@nestjs/common'
import { Role } from '@prisma/client'
import { Request, Response } from 'express'
import { Roles } from 'src/common/decorators/roles.decorator'
import { AuthService } from './auth.service'
import {
  AUTH_TYPE,
  REFRESH_TOKEN_COOKIE_OPTIONS
} from './constants/jwt.constants'
import { Public } from './decorators/public.decorator'
import { AuthenticatedRequest } from './interfaces/authenticated-request.interface'
import { JwtTokens } from './interfaces/jwt.interface'
import { LoginUserDto } from './dto/loginUser.dto'
import { RegisterDTO } from './dto/register.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  setJwtResponse = (res: Response, jwtTokens: JwtTokens) => {
    res.setHeader('authorization', `${AUTH_TYPE} ${jwtTokens.accessToken}`)
    res.cookie(
      'refresh_token',
      jwtTokens.refreshToken,
      REFRESH_TOKEN_COOKIE_OPTIONS
    )
  }

  @Public()
  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      const jwtTokens = await this.authService.issueJwtTokens(loginUserDto)
      this.setJwtResponse(res, jwtTokens)
      return
    } catch (error) {
      throw new UnauthorizedException(error.message)
    }
  }

  @Public()
  @Post('register')
  async register(
    @Body() registerDTO: RegisterDTO,
    @Res({ passthrough: true }) res: Response
  ) {
    const token: JwtTokens = await this.authService.register(registerDTO)
    this.setJwtResponse(res, token)
  }

  @Public()
  @Get('reissue')
  async reIssueJwtTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const refreshToken = req.cookies['refresh_token']
    if (!refreshToken) throw new BadRequestException('Invalid Token')
    try {
      const newJwtTokens: JwtTokens = await this.authService.updateJwtTokens(
        refreshToken
      )
      this.setJwtResponse(res, newJwtTokens)
      return
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error
      }
      throw new UnauthorizedException(error.message)
    }
  }

  @Post('logout')
  @Roles(Role.Newbie)
  async logout(
    @Req() req: AuthenticatedRequest,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      await this.authService.deleteRefreshToken(req.user.username)
      res.clearCookie('refresh_token', REFRESH_TOKEN_COOKIE_OPTIONS)
      return
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  @Get('role')
  @Roles(Role.Newbie)
  async getRole(@Req() req: AuthenticatedRequest) {
    return { role: req.user.role }
  }
}
