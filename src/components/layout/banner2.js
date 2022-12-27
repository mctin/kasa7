import React from "react";

import "../layout/banner2.css";

const Banner2 = (props) => {
  return (
    // <div className="backgroundbanner">
    <div className="banner2">
      <img className="img" src={props.img} alt="" />
      <div className="overlay"></div>
    </div>
  );
};

export default Banner2;
