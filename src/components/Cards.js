import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ logement }) => {
  const { id, cover, title } = logement;
  const path = `/logement/${id}`;
  return (
    <div className="cards">
      <NavLink to={path} className="getLogement">
        <img className="cover" src={cover} alt="Le logement" />
        <h2 className="title">{title}</h2>{" "}
      </NavLink>
    </div>
  );
};

export default Cards;
