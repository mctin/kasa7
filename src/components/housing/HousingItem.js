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
            <h3 className={classes.content}>{props.title}</h3>
          </div>
        </Card>
      </Link>
    </li>
  );
}

export default Housing;
