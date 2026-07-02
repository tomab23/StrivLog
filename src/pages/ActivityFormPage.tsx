
import ActivityFormPart from "@/components/features/activity/ActivityFormPart"
import { useParams } from "react-router-dom"

const ActivityFormPage = () => {

  const { id } = useParams()
  
  return (
    <div className="contenu">
      <p className="">ID : {id ? id : "New"}</p>
        <ActivityFormPart />
    </div>
  )
}

export default ActivityFormPage
