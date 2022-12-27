import React from "react";
import "./stars.css";

import redstar from "../assets/images/stars.png";
import empty from "../assets/images/starempty.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={empty}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;
