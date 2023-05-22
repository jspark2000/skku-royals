import {
  BadRequestException,
  CACHE_MANAGER,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import axios from 'axios'
import { AccessToken } from './interfaces/accessToken.interface'
import { UserProfile } from './interfaces/userProfile.interface'
import { BandList } from './interfaces/bandList.interface'
import { BandUser, Role } from '@prisma/client'
import { BandUserDTO } from './dto/bandUser.dto'
import { AccountUpdateReqeustDTO } from './dto/accountUpdateRequest.dto'
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt'
import { JwtObject, JwtPayload, JwtTokens } from './interfaces/jwt.interface'
import {
  ACCESS_TOKEN_EXPIRATION_SEC,
  REFRESH_TOKEN_EXPIRATION_SEC
} from './constants/jwt.constants'
import { Cache } from 'cache-manager'
import { refreshTokenCacheKey } from 'src/common/cache/keys'
import { InviteCodeDTO } from './dto/inviteCode.dto'

@Injectable()
export class AuthService {
  private readonly getAuthCodeURL = 'https://auth.band.us/oauth2/authorize'
  private readonly getTokenURL = 'https://auth.band.us/oauth2/token'
  private readonly getUserProfileURL = 'https://openapi.band.us/v2/profile'
  private readonly getBandListURL = 'https://openapi.band.us/v2.1/bands'

  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  getOAuth2URL(): string {
    return `${this.getAuthCodeURL}?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`
  }

  async getBandUserList(): Promise<BandUserDTO[]> {
    const bandUserList = await this.prismaService.bandUser.findMany({
      select: {
        userKey: true,
        userNickname: true,
        profileUrl: true,
        role: true
      }
    })

    return bandUserList
  }

  async deleteBandUser(userKey: string): Promise<{ userNickname: string }> {
    const adminCheck = await this.prismaService.bandUser.findUnique({
      where: {
        userKey
      },
      select: {
        role: true
      }
    })

    if (adminCheck.role === Role.Admin || adminCheck.role === Role.SuperAdmin) {
      throw new HttpException(
        'admin 이상 권한을 포함하는 변경은 superAdmin 전용 메뉴에서 가능합니다.',
        HttpStatus.FORBIDDEN
      )
    }

    const deleteResult = await this.prismaService.bandUser.delete({
      where: {
        userKey
      },
      select: {
        userNickname: true
      }
    })

    return deleteResult
  }

  async updateBandUserRole(
    accountDTO: AccountUpdateReqeustDTO
  ): Promise<{ userNickname: string }> {
    const adminCheck = await this.prismaService.bandUser.findUnique({
      where: {
        userKey: accountDTO.userKey
      },
      select: {
        role: true
      }
    })

    if (adminCheck.role === Role.Admin || adminCheck.role === Role.SuperAdmin) {
      throw new HttpException(
        'admin 이상 권한을 포함하는 변경은 superAdmin 전용 메뉴에서 가능합니다.',
        HttpStatus.FORBIDDEN
      )
    }

    const updateResult = await this.prismaService.bandUser.update({
      where: {
        userKey: accountDTO.userKey
      },
      data: {
        role: Role[accountDTO.role]
      },
      select: {
        userNickname: true
      }
    })

    if (!updateResult) {
      throw new HttpException(
        '업데이트에 실패했습니다.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    return updateResult
  }

  async loginOrRegister(code: string) {
    const token = await this.getAccessToken(code)
    const userProfile = await this.getUserProfile(token)
    const isRegistered = await this.checkRegistration(userProfile)

    if (!isRegistered) {
      const isWhiteList = await this.checkWhiteList(token)

      if (!isWhiteList) {
        throw new HttpException(
          {
            message: '성균관대 미식축구부 밴드에 가입되어있지 않습니다.',
            code: 101
          },
          HttpStatus.BAD_REQUEST
        )
      }

      const registerResult = await this.registerUser(userProfile)

      if (!registerResult) {
        throw new HttpException(
          { message: 'DB 오류', code: 100 },
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      }
    }

    const { profileUrl, userNickname } =
      await this.prismaService.bandUser.findUnique({
        where: {
          userKey: userProfile.result_data.user_key
        },
        select: {
          role: true,
          profileUrl: true,
          userNickname: true
        }
      })

    const access_token = await this.createJwtTokens({
      userKey: userProfile.result_data.user_key,
      userProfileUrl: profileUrl,
      userNickname
    })

    return {
      ...access_token
    }
  }

  async register(authDTO: InviteCodeDTO) {
    const { inviteCode, code } = authDTO
    const valid = await this.verifyInviteCode(inviteCode)

    if (!valid) {
      throw new HttpException(
        { message: '유효하지 않은 초대 코드입니다.', code: 100 },
        HttpStatus.BAD_REQUEST
      )
    }

    const token: AccessToken = await this.cacheManager.get(code)

    if (!token) {
      throw new HttpException(
        { message: '인증정보가 만료되었습니다.', code: 100 },
        HttpStatus.NOT_FOUND
      )
    }

    const userProfile = await this.getUserProfile(token)
    const registerResult = await this.registerUser(userProfile)

    if (!registerResult) {
      throw new HttpException(
        { message: 'DB 오류', code: 100 },
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    const { profileUrl, userNickname } =
      await this.prismaService.bandUser.findUnique({
        where: {
          userKey: userProfile.result_data.user_key
        },
        select: {
          role: true,
          profileUrl: true,
          userNickname: true
        }
      })

    const access_token = await this.createJwtTokens({
      userKey: userProfile.result_data.user_key,
      userProfileUrl: profileUrl,
      userNickname
    })

    return {
      ...access_token
    }
  }

  private async getAccessToken(code: string): Promise<AccessToken> {
    const accessTokenURL =
      this.getTokenURL + '?grant_type=authorization_code' + '&code=' + code
    const Authorization =
      'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
    const headers = {
      Authorization
    }
    const token: AccessToken = await axios({
      method: 'get',
      url: accessTokenURL,
      headers
    })
      .then((response) => {
        return response.data
      })
      .catch(() => {
        throw new HttpException(
          { message: 'BAND API ERROR', code: 101 },
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      })

    await this.cacheManager.set(code, token, 10 * 60 * 1000)

    return token
  }

  private async getUserProfile(token: AccessToken): Promise<UserProfile> {
    const profileURL =
      this.getUserProfileURL + '?access_token=' + token.access_token

    const userProfile: UserProfile = await axios({
      method: 'get',
      url: profileURL
    })
      .then((response) => {
        return response.data
      })
      .catch(() => {
        throw new HttpException(
          { message: 'CANNOT ACCESS PROFILE', code: 101 },
          HttpStatus.INTERNAL_SERVER_ERROR
        )
      })

    if (userProfile.result_data.profile_image_url === '')
      userProfile.result_data.profile_image_url =
        'https://ssl.pstatic.net/cmstatic/webclient/dres/20230116112132/images/template/profile_60x60.png'

    return userProfile
  }

  private async checkWhiteList(token: AccessToken): Promise<boolean> {
    const bandListURL =
      this.getBandListURL + '?access_token=' + token.access_token

    const bandList: BandList = await axios({
      method: 'get',
      url: bandListURL
    }).then((response) => {
      return response.data
    })

    const bandExist = bandList.result_data.bands.filter(
      (value) => value.band_key === process.env.ROYALS_BAND_KEY
    )

    if (bandExist.length !== 0) {
      return true
    } else {
      return false
    }
  }

  private async checkRegistration(userProfile: UserProfile): Promise<boolean> {
    const userKey = userProfile.result_data.user_key
    const isRegistered: BandUser = await this.prismaService.bandUser.findUnique(
      {
        where: {
          userKey
        }
      }
    )

    return isRegistered ? true : false
  }

  private async registerUser(
    userProfile: UserProfile
  ): Promise<{ userNickname: string; role: string }> {
    const registerationResult = await this.prismaService.bandUser.create({
      data: {
        userKey: userProfile.result_data.user_key,
        userNickname: userProfile.result_data.name,
        profileUrl:
          userProfile.result_data.profile_image_url ??
          'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg?type=s75'
      },
      select: {
        userNickname: true,
        role: true
      }
    })

    return registerationResult
  }

  async createJwtTokens(user: JwtPayload): Promise<JwtTokens> {
    const payload: JwtPayload = user
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
      refreshTokenCacheKey(user.userKey),
      refreshToken,
      REFRESH_TOKEN_EXPIRATION_SEC * 1000
    )

    return { accessToken, refreshToken }
  }

  async updateJwtTokens(refreshToken: string): Promise<JwtTokens> {
    const { userKey, userNickname, userProfileUrl } = await this.verifyJwtToken(
      refreshToken
    )
    if (!(await this.isValidRefreshToken(refreshToken, userKey))) {
      throw new BadRequestException('다른기기에서 로그인 했습니다.')
    }
    return await this.createJwtTokens({
      userKey,
      userNickname,
      userProfileUrl
    })
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

  async deleteRefreshToken(userKey: string) {
    return await this.cacheManager.del(refreshTokenCacheKey(userKey))
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
    const origin = await this.cacheManager.get('invite-code')
    return inviteCode === origin
  }

  // only used for thunder-client test
  async fakeLogin(userKey: string, secret: string) {
    if (secret !== process.env.JWT_SECRET) {
      throw new BadRequestException('올바르지 않은 접근입니다.')
    }

    const check = await this.prismaService.bandUser.findUnique({
      where: {
        userKey
      },
      select: {
        userKey: true,
        userNickname: true
      }
    })

    if (!check) {
      throw new BadRequestException('존재하지 않는 계정입니다.')
    }

    return await this.createJwtTokens({
      userKey: check.userKey,
      userNickname: check.userNickname,
      userProfileUrl:
        'https://coresos-phinf.pstatic.net/a/30f048/3_2h2Ud018svcxyrfbhxl9z38_2u6v6s.jpg'
    })
  }
}
