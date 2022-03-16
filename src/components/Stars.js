import React from "react";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const Stars = () => {
  // let nbRating = parseInt(logement.rating);
  const [rating, setRating] = useState(100);

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="rates">
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  );
};

export default Stars;
