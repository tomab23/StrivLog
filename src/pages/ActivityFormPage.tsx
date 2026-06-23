
import ActivityFormPart from "@/components/features/activity/ActivityFormPart"
import { useParams } from "react-router-dom"

const ActivityFormPage = () => {

  const { id } = useParams()
  
  return (
    <div className="contenu">
      <p className="my-10">ID : {id ? id : "New"}</p>
        <ActivityFormPart id={Number(id)} />
    </div>
  )
}

export default ActivityFormPage
