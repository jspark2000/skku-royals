import { IsNumber, IsString } from 'class-validator'

export class UpdateRoleDTO {
  @IsNumber()
  id: number

  @IsString()
  role: string

  @IsString()
  name: string
}
