import React from "react";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";

const Stars = ({ logement }) => {
  let nbRating = parseInt(logement.rating);
  const [rating, setRating] = useState(nbRating);

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
