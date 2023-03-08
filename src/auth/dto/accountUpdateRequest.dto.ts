import { IsString } from 'class-validator'

export class AccountUpdateReqeustDTO {
  @IsString()
  userKey: string

  @IsString()
  role: string

  @IsString()
  teamRole: string
}
