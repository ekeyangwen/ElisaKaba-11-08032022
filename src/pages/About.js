import React from "react";
import Header from "../components/Header.js";

const About = () => {
  return (
    <div className="about">
      <Header />
      <img
        className="imgAbout"
        alt="En tête à propos"
        src="../../public/img/backgroundAbout.png"
      ></img>
    </div>
  );
};

export default About;
