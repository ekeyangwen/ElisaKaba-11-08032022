import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";

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
    <div className="unLogement">
      {eachCard
        .filter((logement) => logement.id === id)
        .map((logement, id) => (
          <div key={id} className="logementInfo">
            <h1 className="title">
              {logement.title}
              <p className="location">{logement.location}</p>
              <div className="stars">
                {eachCard &&
                  eachCard.length > 0 &&
                  eachCard.map((logement) => (
                    <Stars key={logement.id} logement={logement} />
                  ))}
              </div>
            </h1>
          </div>
        ))}
      ;
    </div>
  );
};

export default LogementGallery;
