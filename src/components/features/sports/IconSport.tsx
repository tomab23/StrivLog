import { SportList, type Sport } from "@/consts/SportList"

interface IconSportProps {
  sport: string
}

const IconSport = ({ sport }: IconSportProps) => {
  if (!(sport in SportList)) {
    return null
  }

  const { icon: Icon, label } = SportList[sport as Sport]

  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 max-sm:h-4 max-sm:w-4" />
      <span className="truncate max-sm:max-w-20">{label}</span>
    </div>
  )
}

export default IconSport