import React from "react";
import banner2 from "../images/banner2.png";

import "../layout/banner.css";

const Banner = (image) => {
  return (
    <div className="banner">
      <img className="img" src={banner2} alt="" />
      <div className="overlay"></div>
      <h1 className="text">"Chez vous, partout et ailleurs"</h1>
    </div>
  );
};

export default Banner;
