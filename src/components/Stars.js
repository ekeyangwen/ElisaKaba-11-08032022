import React from "react";

const Stars = ({ logement }) => {
  const { rating } = logement;
  let nbRating = parseInt(rating);
  console.log(nbRating);

  return (
    <div className="rates">
      <span className="stars">{rating}</span>
    </div>
  );
};

export default Stars;
