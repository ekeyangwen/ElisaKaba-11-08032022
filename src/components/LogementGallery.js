import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";
import Dropdown from "./Dropdown";
import Carrousel from "./Carrousel";
import Tags from "./Tags";
import Host from "./Host";

const LogementGallery = () => {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const flat = cards.filter((logement) => logement.id === id);
  console.log(flat);

  const getEachData = () => {
    fetch("../../../data.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setCards(myJson);
      });
  };

  useEffect(() => {
    getEachData();
  }, []);

  return (
    <div key={id} className="logementContent">
      {flat.map((flat) => (
        <>
          <section className="carousel">
            <Carrousel pictures={flat.pictures} />
          </section>

          <section className="infoflat">
            <h1 className="title">{flat.title} </h1>
            <p className="location">{flat.location}</p>
          </section>

          <span className="tags">
            <Tags tags={flat.tags} />
          </span>
          <section className="ratindAndHost">
            <div key={id} className="ratingStars">
              <Stars rating={flat.rating} />
            </div>
            <section className="host">
              <Host host={flat.host} />
            </section>
          </section>

          <section key={id} className="dropdown">
            <Dropdown dropdown={flat} />
          </section>
        </>
      ))}
    </div>
  );
};

export default LogementGallery;
