import { Type } from 'class-transformer'
import { IsDate, IsNumber, IsString } from 'class-validator'

export class RegisterInjuryDTO {
  @IsNumber()
  peopleId: number

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
