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
    <div className="rounded-2xl bg-primary-foreground p-4 max-sm:text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <IconSport sport="running" />
          <Separator orientation="vertical" />
          <p className="mt-1">{displayDate(date)}</p>
          <Separator orientation="vertical" />
          <p className="mt-1 text-sm max-sm:text-xs">Début : 14h20</p>
        </div>

        <div>
          <EllipsisVertical className="cursor-pointer max-sm:h-4 max-sm:w-4" />
        </div>
      </div>

      <div className="mt-3 ml-7 flex h-5 items-center gap-4 text-sm max-sm:text-xs">
        <div className="flex sm:gap-1 max-sm:flex-col">
          <p>Distance : </p>
          <p>
            10 <span title="kilomètres">km</span>
          </p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex sm:gap-1 max-sm:flex-col">
          <p>Durée : </p>
          <p>{formatDurationTime(duration)}</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex sm:gap-1 max-sm:flex-col">
          <p>Calories : </p>
          <p>
            160 <span title="kilocalories ">kcal</span>
          </p>
        </div>

        {note && <Separator orientation="vertical" />}
        {note && (
          <p title={note}>
            <NotebookPen className="mt-0.5 h-4 w-4 max-sm:h-3 max-sm:w-3" />
          </p>
        )}
      </div>

      {/* <div className="mt-3 ml-7 flex h-5 items-center gap-4 text-sm max-sm:text-xs">
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
        {note && <p title={note}><NotebookPen className="w-4 h-4 mt-0.5 max-sm:h-3 max-sm:w-3" /></p>}
      </div> */}
    </div>
  )
}

export default DiaryDisplay
