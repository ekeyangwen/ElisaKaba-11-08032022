import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";
import Dropdown from "./Dropdown";
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
        .map((logement) => (
          <div>
            <div className="carousel">
              <Carrousel pictures={logement.pictures} />
            </div>
            <div className="infoLogement">
              <h1 className="title">{logement.title} </h1>
              <p className="location">{logement.location}</p>
              <section className="ratindAndHost">
                <div key={id} className="ratingStars">
                  <Stars logement={logement.rating} />
                </div>
                <div className="host">
                  <p className="hostName">{logement.host.name}</p>
                  <img
                    className="hostPic"
                    src={logement.host.picture}
                    alt="L'hôte"
                  ></img>
                </div>
              </section>
            </div>
            <div key={id} className="dropdown">
              <Dropdown logement={logement} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default LogementGallery;
