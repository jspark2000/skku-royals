import { IsNumber } from 'class-validator'

export class UpdateRecordDTO {
  @IsNumber()
  eventValue: number
}
