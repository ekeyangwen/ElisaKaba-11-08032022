import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";
import Carrousel from "./Carrousel";

const LogementGallery = () => {
  const { id } = useParams();
  const [eachCard, seteachCard] = useState([]);

  const getEachData = () => {
    fetch("../../../data.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        seteachCard(myJson);
      });
  };
  useEffect(() => {
    getEachData();
  }, []);

  return (
    <div key={id} className="unLogement">
      {eachCard
        .filter((logement) => logement.id === id)
        .map((logement, pictures) => (
          <div>
            <div className="carousel">
              {logement.pictures.map((pictures) => (
                <Carrousel pictures={pictures}></Carrousel>
              ))}
            </div>
            <div className="infoLogement">
              <h1 className="title">{logement.title} </h1>
              <p className="location">{logement.location}</p>
              <div className="stars">
                <Stars logement={logement} />
              </div>
            </div>
          </div>
        ))}
      ;
    </div>
  );
};

export default LogementGallery;
