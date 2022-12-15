import React from "react";
import bannerinfo from "../images/bannerinfo.png";

import "../layout/banner.css";

const Banner = (image) => {
  return (
    <div className="banner">
      <img className="img" src={bannerinfo} alt="" />
      <div className="overlay"></div>
      <h1 className="text">"Chez vous, partout et ailleurs"</h1>
    </div>
  );
};

export default Banner;
