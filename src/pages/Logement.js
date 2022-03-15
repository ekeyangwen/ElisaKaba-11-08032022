import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
const Logement = ({ logement }) => {
  return (
    <div className="ficheLogement">
      <Header />
      <Cards />
    </div>
  );
};

export default Logement;
