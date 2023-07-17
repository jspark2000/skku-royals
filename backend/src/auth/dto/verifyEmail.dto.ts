import { IsNotEmpty, IsString } from 'class-validator'

export class VerifyEmailDTO {
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  pin: string
}
