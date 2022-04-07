import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ card }) => {
  const { id, cover, title } = card;
  const path = `/logement/${id}`;
  return (
    <div className="cards">
      <NavLink to={path} className="getLogement">
        <img className="cover" src={cover} alt="Le logement" />
        <h2 className="titleCards">{title}</h2>{" "}
      </NavLink>
    </div>
  );
};

export default Cards;
