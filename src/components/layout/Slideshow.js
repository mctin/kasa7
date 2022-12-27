import React, { useState } from "react";
import "./Slideshow.css";
import chevronleft from "../../assets/images/chevronleft.png";
import chevronright from "../../assets/images/chevronright.png";
// -------------------------------------------

export default function Slideshow(props) {
  const [slideIdx, setSlideIdx] = useState(0);
  const imgSize = () => {
    const slideshowImg = document.querySelector(".slideshow-container img");
    if (!slideshowImg) {
      return 0;
    }
    return slideshowImg.width;
  };

  const onNext = () => {
    if (slideIdx === props.img.length - 1) {
      setSlideIdx(0);
    } else {
      setSlideIdx(slideIdx + 1);
    }
  };

  const onPrev = () => {
    if (slideIdx === 0) {
      setSlideIdx(props.img.length - 1);
    } else {
      setSlideIdx(slideIdx - 1);
    }
  };

  return (
    <div className="slideshow">
      <div
        className="slideshow-container"
        style={{ transform: `translateX(-${slideIdx * imgSize()}px)` }}
      >
        {props.img.map((picture) => (
          <img
            className="slideshow-container-img"
            src={picture}
            alt="pix"
            key={picture}
          />
        ))}
      </div>
      <div className={"slideshow-controls"}>
        <img src={chevronleft} className={"chevron"} onClick={onPrev} />
        <img
          src={chevronright}
          alt="arrow"
          className={"chevron"}
          onClick={onNext}
        />
      </div>
      <div className={"slideshow-idx"}>
        {slideIdx + 1} / {props.img.length}
      </div>
    </div>
  );
}
