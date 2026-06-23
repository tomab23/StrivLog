import { displayDate } from "@/helpers/DisplayDate"
import IconSport from "../sports/IconSport"
import { Separator } from "@/components/ui/separator"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { EllipsisVertical, NotebookPen } from "lucide-react"

// type Props = {
//     Activity : Activity;
// }

const DiaryDisplay = () => {
  const date = new Date()

  const duration = 12

  const note = "test note"

  return (
    <div className="bg-primary-foreground p-4 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <IconSport sport="running" />
          <Separator orientation="vertical" />
          <p className="mt-1">{displayDate(date)}</p>
          <Separator orientation="vertical" />
          <p className="mt-1 text-sm">Début : 14h20</p>
        </div>

        <div><EllipsisVertical className="cursor-pointer" /></div>
      </div>

      <div className="mt-3 ml-7 flex h-5 items-center gap-4 text-sm">
        <div>
          Distance : 10 <span title="kilomètres">km</span>
        </div>
        <Separator orientation="vertical" />
        <div>Durée : {formatDurationTime(duration)}</div>
        <Separator orientation="vertical" />
        <div>
          Calories : 160 <span title="kilocalories ">kcal</span>
        </div>

        {note && <Separator orientation="vertical" />}
        {note && <p title={note}><NotebookPen className="w-4 h-4 mt-0.5" /></p>}
      </div>
    </div>
  )
}

export default DiaryDisplay
