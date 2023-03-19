import { Type } from 'class-transformer'
import { IsDate, IsString } from 'class-validator'

export class UpdateInjuryInfoDTO {
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
