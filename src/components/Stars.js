import React from "react";

const Stars = ({ rating }) => {
  const greyStars = "../../../img/Vector-star-grey.png";
  const redStars = "../../../img/Vector-star.png";

  const ratingMax = 5;
  const ratingCurrent = rating;
  let ratingCollection = [];

  const rates = () => {
    for (let i = 0; i < ratingMax; i++) {
      if (i < ratingCurrent) {
        ratingCollection.push(
          <span key={i} className="oneStar">
            <img className="image" src={redStars} alt="Etoile" index="1"></img>
          </span>
        );
      } else {
        ratingCollection.push(
          <span key={i} className="oneStar">
            <img className="image" src={greyStars} alt="Etoile" index="1"></img>
          </span>
        );
      }
    }
    return ratingCollection;
  };

  return <div>{rates()}</div>;
};

export default Stars;
