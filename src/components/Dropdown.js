import React, { useState } from "react";

const Dropdown = ({ logement }) => {
  const { description, equipments } = logement;

  const [isActive, setIsActive] = useState(false);
  const listeEquipement = equipments.map((equipement) => <li>{equipement}</li>);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="dropdown">
      <section className="dropHeader">
        <button onClick={onClick} className="dropBtn">
          <span className="titre">Description</span>

          <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
        </button>
      </section>
      <section className="dropContent">
        <nav className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul className="description">{description}</ul>
        </nav>
      </section>

      <section className="dropHeader">
        <button onClick={onClick} className="dropBtn">
          <span className="titre">Equipements</span>

          <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
        </button>
      </section>
      <section className="dropContent">
        <nav className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul className="equipement">{listeEquipement}</ul>
        </nav>
      </section>
    </div>
  );
};

export default Dropdown;
