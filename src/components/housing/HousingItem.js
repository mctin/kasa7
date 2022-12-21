import { Link } from "react-router-dom";
import Card from "../ui/Card";
import "./HousingItem.css";

function Housing(props) {
  return (
    <li className="item">
      <Link to={`/Housing/${props.id}`}>
        <Card>
          <div className="image">
            <img src={props.cover} alt={props.title} />
            <h3 className="content">{props.title}</h3>
          </div>
        </Card>
      </Link>
    </li>
  );
}

export default Housing;
