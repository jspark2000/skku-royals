import { Type } from 'class-transformer'
import { IsDate, IsNumber, IsString } from 'class-validator'

export class RegisterInjuryDTO {
  @IsString()
  name: string

  @IsNumber()
  @Type(() => Number)
  studentNo: number

  @IsDate()
  @Type(() => Date)
  startDate: Date

  @IsDate()
  @Type(() => Date)
  endDate: Date

  @IsString()
  description: string

  others?: string
}
