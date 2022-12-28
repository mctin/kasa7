import "./Card.css";

function Card(props) {
  return <div className="location_card">{props.children}</div>;
}

export default Card;
