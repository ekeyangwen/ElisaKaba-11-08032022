import React from "react";
import Header from "../components/Header";
import LinkRetourAccueil from "../components/LinkRetourAccueil";

const NotFound = () => {
  return (
    <div className="notFound">
      <Header />
      <div className="Oups">
        <h1 className="E404">404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <LinkRetourAccueil />
      </div>
    </div>
  );
};

export default NotFound;
