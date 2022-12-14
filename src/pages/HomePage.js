import DataHouse from "././../datas/DataHouse.json";
import HousingList from "../components/housing/HousingList";
import imageBanner from "../components/images/banner2.png";

import "../styles/infoPage.css";

function HomePage() {
  return (
    <section>
      <div>
        <h1>HomePage</h1>
        <h2 className="title_home">Chez vous, partout et ailleurs</h2>
      </div>
      <div className="title_img">
        <img src={imageBanner} alt="bimg" />
      </div>
      <section className="flex">
        <div className="location_card">
          <HousingList houses={DataHouse} />
        </div>
      </section>
    </section>
  );
}

export default HomePage;
