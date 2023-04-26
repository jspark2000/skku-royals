import { RecordEvent, RecordItem } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsNumber } from 'class-validator'

export class RegisterRecordDTO {
  @IsDate()
  @Type(() => Date)
  date: Date

  @IsEnum(RecordItem)
  item: RecordItem

  @IsEnum(RecordEvent)
  event: RecordEvent

  @IsNumber()
  eventValue: number
}
