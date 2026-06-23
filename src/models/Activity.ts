export default class Activity {
  id: number
  created_at: string
  date: string
  hour: string | null
  duration: number //minutes
  distance: number
  calories: number
  note: string | null
  sport: string

  constructor(
    id: number,
    created_at: string,
    date: string,
    hour: string | null,
    duration: number,
    distance: number,
    calories: number,
    note: string | null,
    sport: string
  ) {
    this.id = id
    this.created_at = created_at
    this.date = date
    this.hour = hour
    this.duration = duration
    this.distance = distance
    this.calories = calories
    this.note = note
    this.sport = sport
  }
}
