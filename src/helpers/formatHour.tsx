export const formatHour = (time: string) => {
  const [hours, minutes] = time.split(":")
  return `${hours}h${minutes}`
}