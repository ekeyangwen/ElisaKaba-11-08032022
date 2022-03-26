import React from "react";
import data from "./DopdownData";
import { useState } from "react";

const AboutContent = () => {
  console.log(data);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="about">
      <button onClick={onClick} className="dropBtn">
        <details className="titre">
          <summary> {data[0].title} </summary>
        </details>
        <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
      </button>
      <section className="dropContent">
        {" "}
        <nav className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul className="description">{data[0].content}</ul>{" "}
        </nav>{" "}
      </section>
    </div>
  );
};

export default AboutContent;
