export interface NotSubmittedDTO {
  id: number
  name: string
  studentNo: number
  Attendance: {
    date: Date
  }[]
}
