import DiaryDisplay from "@/components/features/diary/DiaryDisplay"
import { useActivity } from "@/hooks/UseActivity"

const DiaryPage = () => {
  const { activitys } = useActivity()

  console.log(activitys);
  
  return (
    <div className="contenu">
      <p>DiaryPage</p>
      <br /><br /><br /><br />

      <DiaryDisplay /><br />
      <DiaryDisplay /><br />
      <DiaryDisplay /><br />
    </div>
  )
}

export default DiaryPage