import { AttendanceStatus } from '@prisma/client'
import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator'

export class AttendanceCheckDTO {
  @IsNumber()
  id: number

  @IsString()
  location: string

  @IsEnum(AttendanceStatus)
  actual: AttendanceStatus

  @IsBoolean()
  checked: boolean
}
