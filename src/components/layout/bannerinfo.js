import React from "react";
import banner2 from "../images/banner2.png";

import "../layout/banner.css";

const Bannerinfo = (image) => {
  return (
    <div className="banner">
      <img className="img" src={banner2} alt="" />
      <div className="overlay"></div>
    </div>
  );
};

export default Bannerinfo;
