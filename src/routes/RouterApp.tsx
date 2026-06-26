import ActivityFormPage from "@/pages/ActivityFormPage"
import AuthPage from "@/pages/AuthPage"
import DiaryPage from "@/pages/DiaryPage"
import HomePage from "@/pages/HomePage"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"

const RouterApp = () => {
  return (
    // <Suspense fallback={<div>Chargement...</div>} ></Suspense>
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage login />} />
      <Route path="/register" element={<AuthPage login={false} />} />

      {/* PRIVATE */}
      <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      <Route path="/diary" element={<PrivateRoute><DiaryPage /></PrivateRoute>} />

      {/* FORM */}
      <Route path="/activity" element={<ActivityFormPage />} />
      <Route path="/activity/:id" element={<ActivityFormPage />} />

      {/* TEST */}
    </Routes>
  )
}

export default RouterApp
