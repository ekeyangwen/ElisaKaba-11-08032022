import React, { useState, useEffect } from "react";

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  let length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);
  console.log(length);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const SupprimerFleches = () => {
    if (length <= 1) {
      document.querySelector(".previousBtn").style.display = "none";
      document.querySelector(".nextBtn").style.display = "none";
    }
  };
  useEffect(() => {
    SupprimerFleches();
  }, []);

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
        <p className="imgNb">
          {current + 1}/{length}
        </p>
      </div>
    </section>
  );
};

export default Carrousel;
