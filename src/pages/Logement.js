import React from "react";
import FicheLogement from "../components/FicheLogement";
import Header from "../components/Header";

const Logement = () => {
  return (
    <div className="ficheLogement">
      <Header />
      <FicheLogement />
      <h1 className="hello">HELLO</h1>
    </div>
  );
};

export default Logement;
