import { AttendanceStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator'

export class RegisterAttendancesDTO {
  @Type(() => RegisterAttendanceDTO)
  attendances: RegisterAttendanceDTO[]
}

export class RegisterAttendanceDTO {
  @IsString()
  name: string

  @IsNumber()
  studentNo: number

  @IsEnum(AttendanceStatus)
  survey: AttendanceStatus

  @IsString()
  location: string

  @IsDate()
  @Type(() => Date)
  date: Date

  @IsString()
  reason: string
}
