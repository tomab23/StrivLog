

import IconSport from "@/components/features/sports/IconSport";
import { Button } from "@/components/ui/button"

import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();



  return (
    <div className="contenu">
      <p>HomePage</p>
      <br /><br /><br /><br />

      <div className="flex items-center gap-10">
        <Button onClick={() => navigate("/diary")}>Diary</Button>
        <Button onClick={() => navigate("/activity")}>New activity</Button>
        <Button onClick={() => navigate(`/activity/1`)}>Activity id 1</Button>

      </div>
    </div>
  )
}

export default HomePage