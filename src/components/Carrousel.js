import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carrousel = ({ pictures }) => {
  console.log(pictures);

  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      onChange={true}
      onClickItem={true}
    >
      <div>
        {pictures.map((picture) => (
          <img className="eachImg" src={picture} alt="Gallery"></img>
        ))}
      </div>
    </Carousel>
  );
};

export default Carrousel;
