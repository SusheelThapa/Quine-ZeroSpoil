import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import ExpiryTrack from "@/components/ExpiryTrack";
import AddItem from "@/components/ExpiryTrack/Additem";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/expiry_track" element={<ExpiryTrack />} />
        <Route path="/expiry_track/add_item" element={<AddItem />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
