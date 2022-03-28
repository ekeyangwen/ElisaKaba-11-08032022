import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [data, setData] = useState([]);

  const getDropdownData = () => {
    fetch("../../../data.json")
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
    <div className="dropdown">
      {data.map((about) => (
        <>
          <details>
            <summary>
              {" "}
              <div className="titleAbout"> description</div>{" "}
              <button className="dropdownBtn">
                {" "}
                <img src="../../../img/Vector-bas.png" alt="Fleche bas" />
              </button>{" "}
            </summary>
            <p className="aboutContent">{about.equipment}</p>{" "}
          </details>
        </>
      ))}
    </div>
  );
};

export default Dropdown;
