import { AttendanceType } from '@/common/enums/attendanceType.enum'

export interface Survey {
  id: number
  description: string
  date: Date
  type: AttendanceType
}
