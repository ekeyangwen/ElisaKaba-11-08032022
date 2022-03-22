import React, { useState } from "react";

const Stars = ({ rating }) => {
  const greyStars = "../../../img/Vector-star-grey.png";
  const redStars = "../../../img/Vector-star.png";

  const ratingMax = 5;
  const ratingCurrent = rating;
  let ratingCollection = [];

  const rates = () => {
    console.log(ratingCurrent);
    for (let i = 0; i < ratingMax; i++) {
      console.log("For i=", i);
      if (i < ratingCurrent) {
        console.log("if");
        ratingCollection.push(
          <span key={i} className="oneStar">
            <img className="image" src={redStars} alt="Etoile" index="1"></img>
          </span>
        );
      } else {
        console.log("Else");
        ratingCollection.push(
          <span key={i} className="oneStar">
            <img className="image" src={greyStars} alt="Etoile" index="1"></img>
          </span>
        );
      }
    }
    console.log(ratingCollection);
    return ratingCollection;
  };

  return <div>{rates()}</div>;
};

export default Stars;
