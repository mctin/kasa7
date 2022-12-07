import HousingItem from "./HousingItem";
import classes from "./HousingList.module.css";

function HousingList(props) {
  return (
    <ul className={classes.list}>
      {props.houses.map((houses) => (
        <HousingItem
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
