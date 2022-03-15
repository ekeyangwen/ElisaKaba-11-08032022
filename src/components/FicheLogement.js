import React from "react";

const FicheLogement = ({ logement }) => {
  return (
    <div className="ficheLogement">
      <img
        className="carrouselLogement"
        src={logement.pictures}
        alt="Le logement"
      />
      <h1 className="nomLogement">{logement.title}</h1>
      <h2 className="villeLogement">{logement.location}</h2>
    </div>
  );
};

export default FicheLogement;
