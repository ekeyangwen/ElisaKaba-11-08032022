import React from "react";
import Header from "../components/Header.js";
import Slogan from "../components/Slogan.js";
import RecupData from "../components/RecupData";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slogan />
      <RecupData />
    </div>
  );
};

export default Home;
