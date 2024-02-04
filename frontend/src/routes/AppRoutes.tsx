import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import DonateFood from "@/pages/DonateFood";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate-food" element={<DonateFood />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
