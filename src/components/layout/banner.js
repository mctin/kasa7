import React from "react";

import "../layout/banner.css";

const Banner = (props) => {
  return (
    // <div className="backgroundbanner">
    <div className="banner">
      <img className="img" src={props.img} alt="" />
      <div className="overlay"></div>
      <h1 className="text"> {props.text}</h1>
    </div>
    // </div>
  );
};

export default Banner;
