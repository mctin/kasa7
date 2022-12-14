import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import InfoHome from "../pages/Housing";
import InfoPage from "../pages/InfoPage";
import HeaderSection from "./layout/HeaderSection";
import FooterSection from "./layout/FooterSection";

function Index() {
  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/Housing/:homeId" element={<InfoHome />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default Index;
