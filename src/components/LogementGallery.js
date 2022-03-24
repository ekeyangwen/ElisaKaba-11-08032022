import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";
import Dropdown from "./Dropdown";
import Carrousel from "./Carrousel";
import Tags from "./Tags";

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
          <section className="logementContent">
            <section className="carousel">
              <Carrousel pictures={logement.pictures} />
            </section>
            <>
              {" "}
              <section className="infoLogement">
                <h1 className="title">{logement.title} </h1>
                <p className="location">{logement.location}</p>
                <span className="tags">
                  <Tags tags={logement.tags} />
                </span>
                <section className="ratindAndHost">
                  <div key={id} className="ratingStars">
                    <Stars rating={logement.rating} />
                  </div>
                  <section className="host">
                    <p className="hostName">{logement.host.name}</p>
                    <img
                      className="hostPic"
                      src={logement.host.picture}
                      alt="L'hôte"
                    ></img>
                  </section>
                </section>
              </section>
            </>

            <section key={id} className="dropdown">
              <Dropdown dropdown={logement} />
            </section>
          </section>
        ))}
    </div>
  );
};

export default LogementGallery;
