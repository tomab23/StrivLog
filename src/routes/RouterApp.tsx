import ActivityFormPage from "@/pages/ActivityFormPage";
import AuthPage from "@/pages/AuthPage";
import DiaryPage from "@/pages/DiaryPage";
import HomePage from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    // <Suspense fallback={<div>Chargement...</div>} ></Suspense>
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage login />} />
      <Route path="/register" element={<AuthPage login={false} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/diary" element={<DiaryPage />} />

      {/* FORM */}
      <Route path="/activity" element={<ActivityFormPage />} />
      <Route path="/activity:id" element={<ActivityFormPage />} />

      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;