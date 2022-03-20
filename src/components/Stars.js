import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Stars = ({ rating }) => {
  let nbRating = parseInt(rating);
  let nbRatingX = nbRating * 20;

  const [rates, setRates] = useState(nbRatingX);

  const handleRating = (rate) => {
    setRates(rate);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} readonly ratingValue={rates} />
    </div>
  );
};

export default Stars;
