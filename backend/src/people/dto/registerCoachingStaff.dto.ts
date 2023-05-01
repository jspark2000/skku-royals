import { TeamRole } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsEnum, IsNumber, IsString } from 'class-validator'

export class RegisterCoachingStaffDTO {
  @IsString()
  name: string

  @IsNumber()
  @Type(() => Number)
  admissionYear: number

  @IsEnum(TeamRole)
  teamRole: TeamRole

  @IsString()
  position: string
}
