import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  private readonly getAuthCodeURL = 'https://auth.band.us/oauth2/authorize';
  private readonly getTokenURL = 'https://auth.band.us/oauth2/token';
  private readonly getUserProfileURL = 'https://openapi.band.us/v2/profile';

  constructor(private readonly prismaService: PrismaService) {}

  getOAuth2URL(): string {
    return `${this.getAuthCodeURL}?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_url=${process.env.REDIRECT_URL}`;
  }
}
