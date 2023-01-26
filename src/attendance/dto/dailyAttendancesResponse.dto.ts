export interface DailyAttendancesResponseDTO {
  date: Date;
  attendances: {
    name: string;
    studentNo: number;
    survey: boolean;
    late: boolean;
    location: string;
    checked: boolean;
  }[];
}
