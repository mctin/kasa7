import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./HousingItem.module.css";

function Housing(props) {
  return (
    <li className={classes.item}>
      <Link to={`/Housing/${props.id}`}>
        <Card>
          <div className={classes.image}>
            <img src={props.cover} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
          </div>
          <div className={classes.actions}>
            <button>To Favorites</button>
          </div>
        </Card>
      </Link>
    </li>
  );
}

export default Housing;
