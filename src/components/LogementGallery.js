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
  const [flat, setFlat] = useState("");

  // const getEachData = () => {
  //   fetch("../../../data.json")
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       let flatFind = myJson.find((logement) => logement.id === id);

  //       setFlat(flatFind);
  //     });
  // };

  useEffect(() => {
    fetch("../../../data.json")
      .then((response) => response.json())
      .then((myJson) => {
        let flatFind = myJson.find((logement) => logement.id === id);
        setFlat(flatFind);
      });
  }, []);

  if (flat === undefined) {
    return <Navigate to="*" />;
  }
  return (
    <div className="logementContent">
      {/* {getFlatTemp && <Navigate to="/NotFound" replace />} */}
      {flat && (
        <section className="carousel">
          <Carrousel pictures={flat.pictures} />
        </section>
      )}
      {flat && (
        <section className="infos">
          <section className="infoFlat">
            <h1 className="titleFlat">{flat.title} </h1>
            <p className="location">{flat.location}</p>
            <span className="tags">
              <Tags tags={flat.tags} />
            </span>
          </section>
          <section className="ratingAndHost">
            <section className="ratingStars">
              <Stars rating={flat.rating} />
            </section>
            <section className="host">
              <Host host={flat.host} />
            </section>
          </section>{" "}
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
