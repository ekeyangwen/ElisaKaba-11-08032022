import React, { useState } from "react";

const Stars = ({ rating }) => {
  const greyStars = "../../../img/Vector-star-grey.png";
  const redStars = "../../../img/Vector-star.png";
  const [imgSrc, setImgSrc] = useState(greyStars);
  const starsValue = 5;

  const Rates = () => {
    if (rating <= starsValue) {
      setImgSrc(redStars);
    }
  };

  return (
    <div>
      <>
        <span className="oneStar">
          <img
            className="image"
            src={imgSrc}
            alt="Etoile"
            index="1"
            onClick={Rates}
          ></img>
        </span>
        <span className="oneStar">
          <img
            className="image"
            src={imgSrc}
            alt="Etoile"
            index="2"
            onClick={Rates}
          ></img>
        </span>
        <span className="oneStar">
          <img
            className="image"
            src={imgSrc}
            alt="Etoile"
            index="3"
            onClick={Rates}
          ></img>
        </span>
        <span className="oneStar">
          <img
            className="image"
            src={imgSrc}
            alt="Etoile"
            index="4"
            onClick={Rates}
          ></img>
        </span>
        <span className="oneStar">
          <img
            className="image"
            src={imgSrc}
            alt="Etoile"
            index="5"
            onClick={Rates}
          ></img>
        </span>
      </>
    </div>
  );
};

export default Stars;
