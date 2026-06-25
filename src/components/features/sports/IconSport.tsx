import { SportList } from "@/consts/SportList"

type Sport = keyof typeof SportList

interface IconSportProps {
  sport: Sport
}

const IconSport = ({ sport }: IconSportProps) => {
  const { icon: Icon, label } = SportList[sport]

  return (
    <div className="flex items-center gap-2">
      <Icon className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
      <span className="mt-1">{label}</span>
    </div>
  )
}

export default IconSport