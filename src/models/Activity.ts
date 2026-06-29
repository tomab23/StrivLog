export default class Activity {
  id: string
  created_at: string
  date: string
  hour: string
  sport: string
  distance: number
  duration: number //minutes
  calories: number
  note: string | null

  constructor(
    id: string,
    created_at: string,
    date: string,
    hour: string,
    sport: string,
    distance: number,
    duration: number,
    calories: number,
    note: string | null
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
