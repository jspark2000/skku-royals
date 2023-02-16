import { TeamRole } from '@prisma/client';

export interface JwtPayload {
  userKey: string;
  userNickname: string;
  userProfileUrl: string;
  teamRole: TeamRole;
}

export interface JwtObject extends JwtPayload {
  iat: number;
  exp: number;
  iss: string;
}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}
