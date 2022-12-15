import "./Card.module.css";

function Card(props) {
  return <div className="location_card rectangle">{props.children}</div>;
}

export default Card;
