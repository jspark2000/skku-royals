export interface JwtPayload {
  userKey: string
  userNickname: string
  userProfileUrl: string
}

export interface JwtObject extends JwtPayload {
  iat: number
  exp: number
  iss: string
}

export interface JwtTokens {
  accessToken: string
  refreshToken: string
}
