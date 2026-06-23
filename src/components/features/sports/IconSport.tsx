import { SportList } from "@/consts/SportList"

type Sport = keyof typeof SportList

interface IconSportProps {
  sport: Sport
}

const IconSport = ({ sport }: IconSportProps) => {
  const { icon: Icon, label } = SportList[sport]

  return (
    <div className="flex items-center gap-2">
      <Icon size={20} />
      <span className="mt-1">{label}</span>
    </div>
  )
}

export default IconSport