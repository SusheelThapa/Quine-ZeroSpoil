import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
