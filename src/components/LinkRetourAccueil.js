import React from "react";
import { NavLink } from "react-router-dom";

const LinkRetourAccueil = () => {
  return (
    <div>
      <NavLink to="/" className="linkAccueil">
        <p className="retourAccueil">Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
};

export default LinkRetourAccueil;
