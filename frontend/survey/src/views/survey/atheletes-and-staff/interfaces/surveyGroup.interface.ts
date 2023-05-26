export interface SurveyGroup {
  id: number
  name: string
  surveys: {
    date: string
  }[]
}
