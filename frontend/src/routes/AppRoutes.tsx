import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import RecipeGenerator from "@/pages/RecipeGenerator";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipe-generator" element={<RecipeGenerator />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
