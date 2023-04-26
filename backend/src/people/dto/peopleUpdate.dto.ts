import { Type } from 'class-transformer'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class PeopleUpdateDTO {
  @IsString()
  name: string

  @IsNumber()
  @Type(() => Number)
  year: number

  @IsString()
  @Type(() => String)
  studentId: string

  @IsBoolean()
  attendanceTarget: boolean

  @IsBoolean()
  newbie: boolean

  @IsBoolean()
  absence: boolean

  @IsString()
  offPosition: string

  @IsString()
  defPosition: string

  @IsString()
  splPosition: string
}
