import ActivityFormPage from "@/pages/ActivityFormPage"
import AuthPage from "@/pages/AuthPage"
import DiaryPage from "@/pages/DiaryPage"
import HomePage from "@/pages/HomePage"
import { Route, Routes, useLocation } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import LayoutWithNavbar from "@/components/layout/LayoutWithNavbar"
import StatsPage from "@/pages/StatsPage"
import ProfilePage from "@/pages/ProfilePage"

const RouterApp = () => {
  const location = useLocation()
  return (
    // <Suspense fallback={<div>Chargement...</div>} ></Suspense>
    <Routes location={location} key={location.pathname}>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage login />} />
      <Route path="/register" element={<AuthPage login={false} />} />

      {/* PRIVATE */}
      <Route element={<LayoutWithNavbar />}>
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/diary" element={<PrivateRoute><DiaryPage /></PrivateRoute>} />
        <Route path="/stats" element={<PrivateRoute><StatsPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        {/* FORM */}
        <Route path="/activity" element={<ActivityFormPage />} />
        <Route path="/activity/:id" element={<ActivityFormPage />} />
      </Route>

      {/* TEST */}
    </Routes>
  )
}

export default RouterApp
