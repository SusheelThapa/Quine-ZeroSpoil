import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import DonateFood from "@/pages/DonateFood";

import Login from "@/pages/Login";
import ExpiryTrack from "@/components/ExpiryTrack";
import AddItem from "@/components/ExpiryTrack/Additem";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate-food" element={<DonateFood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expiry_track" element={<ExpiryTrack />} />
        <Route path="/expiry_track/add_item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
