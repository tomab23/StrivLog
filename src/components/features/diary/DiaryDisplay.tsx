
import IconSport from "../sports/IconSport"
import { Separator } from "@/components/ui/separator"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { NotebookPen } from "lucide-react"
import type Activity from "@/models/Activity"
import { displayDate } from "@/helpers/DisplayDate"
import { formatHour } from "@/helpers/formatHour"
import ActivityMenu from "../activity/ActivityMenu"
import { useNavigate } from "react-router-dom"


type Props = {
    activity : Activity;
}

const DiaryDisplay = ({ activity } : Props) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-primary-foreground p-4 max-sm:text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold max-sm:text-xs">
          <IconSport sport={activity.sport} />
          <Separator orientation="vertical" />
          <p className="sm:mt-1">{displayDate(new Date(activity.date))}</p>
          <Separator orientation="vertical" />
          <p className="sm:mt-1 text-sm max-sm:text-xs font-normal">Début {formatHour(activity.hour)}</p>
        </div>

        <div>
          <ActivityMenu onEdit={() => navigate(`/activity/${activity.id}`)} />
        </div>
      </div>

      <div className="mt-1 flex sm:h-5 items-center gap-2 text-sm max-sm:text-xs">
        <div className="flex sm:gap-1 max-sm:flex-col">
          {/* <p>Distance : </p> */}
          <p>
            {activity.distance} <span title="kilomètres">km</span>
          </p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex sm:gap-1 max-sm:flex-col">
          {/* <p>Durée : </p> */}
          <p>{formatDurationTime(activity.duration)}</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex sm:gap-1 max-sm:flex-col">
          {/* <p>Calories : </p> */}
          <p>
            {activity.calories} <span title="kilocalories ">kcal</span>
          </p>
        </div>

        {activity.note && <Separator orientation="vertical" />}
        {activity.note && (
          <p title={activity.note ?? ""}>
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
