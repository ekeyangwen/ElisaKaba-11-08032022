import React, { useState } from "react";

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(pictures) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="commande">
        <button className="previousBtn" onClick={prevSlide}>
          <img
            className="prev"
            src="../../../img/Vector-left.png"
            alt="fleche gauche"
          ></img>
        </button>
        <button className="nextBtn" onClick={nextSlide}>
          <img
            className="next"
            src="../../../img/Vector-right.png"
            alt="fleche droite"
          ></img>
        </button>
      </div>
      <div className="photos">
        {pictures.map((picture, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img className="imgGallery" src={picture} alt="Gallery"></img>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Carrousel;
