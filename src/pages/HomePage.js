import DataHouse from "././../datas/DataHouse.json";
import HousingList from "../components/housing/HousingList";
import { image } from "../components/images/banner2.png";
import Banner from "../components/layout/banner";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <div className="body-home">
        <div>
          <Banner>banner</Banner>
        </div>
        <div className="bdg"></div>
      </div>
      <div className="background">
        <div className="location_card">
          <HousingList houses={DataHouse} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
