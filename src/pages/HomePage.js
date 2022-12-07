import DataHouse from "../datas/DataHouse.json";
import HousingList from "../components/housing/HousingList";

function HomePage() {
  return (
    <section>
      <h1>housing</h1>
      <HousingList houses={DataHouse} />
    </section>
  );
}

export default HomePage;
