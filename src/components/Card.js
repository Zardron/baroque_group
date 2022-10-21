import React from "react";
import Slider from "react-slick";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

export default function Card({ title, data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <>
      <h1>{title}</h1>
      <Slider {...settings}>
        <div style={{ width: 100 }}>
          <p>100</p>
        </div>
        <div style={{ width: 200 }}>
          <p>200</p>
        </div>
        <div style={{ width: 75 }}>
          <p>75</p>
        </div>
        <div style={{ width: 300 }}>
          <p>300</p>
        </div>
        <div style={{ width: 225 }}>
          <p>225</p>
        </div>
        <div style={{ width: 175 }}>
          <p>175</p>
        </div>
      </Slider>
    </>
  );
}
