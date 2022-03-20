import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = ({ pictures }) => {
  console.log(pictures);

  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      onChange={true}
      onClickItem={true}
      showIndicators={false}
      infiniteLoop={true}
    >
      {pictures.map((picture) => (
        <div>
          {" "}
          <img className="eachImg" src={picture} alt="Gallery"></img>
        </div>
      ))}
    </Carousel>
  );
};

export default Carrousel;
