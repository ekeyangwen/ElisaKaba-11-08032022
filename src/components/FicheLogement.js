import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";

const FicheLogement = () => {
  const { title } = useParams();
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
    <div className="logement">
      <section className="ficheLogement">
        <div className="unLogement">
          {eachCard
            .filter((logement) => logement.id === title)
            .map((logement, id) => (
              <div key={id} className="logementInfo">
                <h1 className="tilte">
                  {logement.title}
                  <p className="location">{logement.location}</p>
                  <Stars />
                </h1>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default FicheLogement;
