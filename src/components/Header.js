import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <img className="logo" src="../../img/LOGO.png" alt="logo"></img>

      <nav className="navigation">
        <ul>
          <NavLink to="/" className="itemNav">
            <li className="accueil">ACCUEIL</li>
          </NavLink>
          <NavLink to="/a-propos" className="itemNav">
            <li className="propos">À PROPOS</li>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
