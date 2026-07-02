import DiaryDisplay from "@/components/features/diary/DiaryDisplay"
import { useActivity } from "@/hooks/UseActivity"

const DiaryPage = () => {
  const { activitys } = useActivity()

  console.log(activitys);
  
  return (
    <div className="contenu">
      <p>DiaryPage</p>
    <div className="flex flex-col gap-4 mt-5">
      {activitys.map((activity) => (
        <DiaryDisplay  key={activity.id} activity={activity} />
      )).reverse()}
    </div>
    </div>
  )
}

export default DiaryPage