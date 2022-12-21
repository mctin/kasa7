import DataHouse from "././../datas/DataHouse.json";
import HousingList from "../components/housing/HousingList";
import Banner from "../components/layout/banner";
import bannerinfo from "../components/images/bannerinfo.png";

import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="body3">
      <div>
        <Banner img={bannerinfo} text="Chez vous, partout et ailleurs"></Banner>
      </div>
      <div className="background3">
        <div className="location_card">
          <HousingList houses={DataHouse} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
