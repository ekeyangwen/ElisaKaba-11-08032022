import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <NavLink to="/" className="logoNav">
        <img
          className="logo"
          src="../../../img/FOOTER_LOGO.png"
          alt="Logo Footer"
        ></img>
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </section>
  );
};

export default Footer;
