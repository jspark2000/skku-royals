import { Type } from 'class-transformer'
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator'

export class RegisterAttendancesDTO {
  @Type(() => RegisterAttendanceDTO)
  attendances: RegisterAttendanceDTO[]
}

export class RegisterAttendanceDTO {
  @IsString()
  name: string

  @IsNumber()
  studentNo: number

  @IsBoolean()
  survey: boolean

  @IsBoolean()
  late: boolean

  @IsString()
  location: string

  @IsDate()
  @Type(() => Date)
  date: Date

  @IsString()
  reason: string
}
