import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const userLogout = () => {
    logout()
    navigate("/")
  }

  return (
      <div className="contenu">
        USER : {user ? user.email : "Pas de User"}
        <br />
        <br />
        <p>Stats = activités, distances, temps, calories dans l'année en cours</p>
        <br />
        <br />
        <div className="flex items-center gap-5">
          <Button onClick={() => navigate("/diary")}>Diary</Button>
          <Button onClick={() => navigate("/activity")}>New activity</Button>
          <Button variant={"destructive"} onClick={userLogout}>
            logout
          </Button>
        </div>
      </div>
  )
}

export default HomePage
