import DataHouse from "././../datas/DataHouse.json";
import HousingList from "../components/housing/HousingList";
import Banner from "../components/layout/banner";
import bannerinfo from "../assets/images/bannerinfo.png";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="body3">
      <Banner img={bannerinfo} text="Chez vous, partout et ailleurs"></Banner>
      <div className="background3">
        <div className="location_card">
          <HousingList houses={DataHouse} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
