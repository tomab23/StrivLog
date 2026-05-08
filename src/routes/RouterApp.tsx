import AuthPage from "@/pages/AuthPage";
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
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;