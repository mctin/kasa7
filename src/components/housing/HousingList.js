import Housing from "./HousingItem";
import "./HousingList.css";

function HousingList(props) {
  return (
    <ul className="list">
      {props.houses.map((houses) => (
        <Housing
          key={houses.id}
          id={houses.id}
          cover={houses.cover}
          title={houses.title}
        />
      ))}
    </ul>
  );
}

export default HousingList;
