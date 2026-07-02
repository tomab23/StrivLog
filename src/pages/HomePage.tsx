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
        <br />
        <br />
        <div className="flex items-center gap-5">
          <Button onClick={() => navigate("/diary")}>Diary</Button>
          <Button onClick={() => navigate("/activity")}>New activity</Button>
          <Button
            onClick={() =>
              navigate(`/activity/9d814d3b-2a67-4fef-91f7-1ddaa484c1fe`)
            }
          >
            Activity id test
          </Button>
          <Button variant={"destructive"} onClick={userLogout}>
            logout
          </Button>
        </div>
      </div>
  )
}

export default HomePage
