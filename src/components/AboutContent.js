import React from "react";
import { useState, useEffect } from "react";

const AboutContent = () => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  const getDropdownData = () => {
    fetch("../../../dropdownData.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
        console.log(data);
      });
  };

  useEffect(() => {
    getDropdownData();
  }, []);

  return (
    <div className="about">
      {data.map((about) => (
        <>
          <button onClick={onClick} className="dropBtn">
            <details className="titre">
              <summary> {about.title} </summary>
            </details>
            <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
          </button>
          <section className="dropContent">
            {" "}
            <nav className={`menu ${isActive ? "active" : "inactive"}`}>
              <ul className="description">{about.content}</ul>{" "}
            </nav>{" "}
          </section>
        </>
      ))}
      ;
    </div>
  );
};

export default AboutContent;
