import { AttendanceStatus } from '@/common/enums/attendanceStatus.enum'
import { AttendanceType } from '@/common/enums/attendanceType.enum'
import { Location } from '@/common/enums/location.enum'

export interface Survey {
  id: number
  description: string
  date: string
  type: AttendanceType
}

export interface Submit {
  date: string
  survey: AttendanceStatus
  reason?: string
  location: Location
}
