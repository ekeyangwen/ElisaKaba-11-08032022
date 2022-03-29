import React from "react";
import Dropdown from "../components/Dropdown";

const data = [
  {
    id: 0,
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },

  {
    id: 1,
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },

  {
    id: 2,
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },

  {
    id: 3,
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  return (
    <div className="about">
      <section className="imgAbout"></section>
      <section className="contentAbout">
        <Dropdown title={data[0].title} content={data[0].content} />
        <Dropdown title={data[1].title} content={data[1].content} />
        <Dropdown title={data[2].title} content={data[2].content} />
        <Dropdown title={data[3].title} content={data[3].content} />
      </section>
    </div>
  );
};

export default About;
