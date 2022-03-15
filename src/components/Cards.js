import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ logement }) => {
  return (
    <div className="cards">
      <NavLink to={logement.id} className="getLogement">
        <img className="cover" src={logement.cover} alt="Le logement" />
        <h2 className="title">{logement.title}</h2>{" "}
      </NavLink>
    </div>
  );
};

export default Cards;
