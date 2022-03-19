import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carrousel = ({ pictures }) => {
  let picture = pictures;
  console.log(pictures);
  return (
    <Carousel showThumbs={false}>
      <div>
        {" "}
        <img className="eachImg" src={picture} alt="Gallery"></img>
      </div>
    </Carousel>
  );
};

export default Carrousel;
