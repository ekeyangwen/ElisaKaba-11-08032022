import React, { useState } from "react";
import data from "./DopdownData";

const Dropdown = ({ dropdown }) => {
  console.log(data);
  const { description } = dropdown;
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="dropdown">
      <section className="dropHeader">
        {" "}
        <button onClick={onClick} className="dropBtn">
          {" "}
          <details className="titre">
            <summary> Description </summary>{" "}
          </details>
          <img src="../../../img/Vector-bas.png" alt="Fleche bas" />{" "}
        </button>{" "}
      </section>{" "}
      <section className="dropContent">
        {" "}
        <nav className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul className="description">{description}</ul>{" "}
        </nav>{" "}
      </section>
      {/* <section className="dropHeader">
        <button onClick={onClick} className="dropBtn">
          <span className="titre">Equipements</span>

          <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
        </button>
      </section>
      <section className="dropContent">
        <nav className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul className="equipement">{listeEquipement}</ul>
        </nav>
      </section> */}
    </div>
  );
};

export default Dropdown;
