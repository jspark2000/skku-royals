import { IsString } from 'class-validator'

export class InviteCodeDTO {
  @IsString()
  code: string

  @IsString()
  inviteCode: string
}
