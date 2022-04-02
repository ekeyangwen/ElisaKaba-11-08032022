import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Stars from "./Stars";
import Dropdown from "./Dropdown";
import Carrousel from "./Carrousel";
import Tags from "./Tags";
import Host from "./Host";

const LogementGallery = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState(undefined);
  const [getFlatTemp, setGetFlatTemp] = useState();

  const getEachData = () => {
    fetch("../../../data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let flatTemp = myJson.filter((logement) => logement.id === id);
        setGetFlatTemp(flatTemp.length === 0);
        setFlat(flatTemp[0]);
      });
  };

  useEffect(() => {
    getEachData();
  }, []);

  return (
    <div className="logementContent">
      {getFlatTemp && <Navigate to="/NotFound" replace />}
      {flat && (
        <section className="carousel">
          <Carrousel pictures={flat.pictures} />
        </section>
      )}
      {flat && (
        <section className="infoFlat">
          <h1 className="title">{flat.title} </h1>
          <p className="location">{flat.location}</p>
        </section>
      )}
      {flat && (
        <span className="tags">
          <Tags tags={flat.tags} />
        </span>
      )}
      {flat && (
        <section className="ratingAndHost">
          <div className="ratingStars">
            <Stars rating={flat.rating} />
          </div>
          <section className="host">
            <Host host={flat.host} />
          </section>
        </section>
      )}
      {flat && (
        <section className="dropdown">
          <Dropdown title="Description" content={flat.description} />
          <Dropdown title="Equipements" list={flat.equipments} />
        </section>
      )}
    </div>
  );
};

export default LogementGallery;
