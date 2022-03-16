import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards.js";

const RecupData = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="logement">
      {data &&
        data.length > 0 &&
        data.map((logement) => <Cards key={logement.id} logement={logement} />)}
    </div>
  );
};

export default RecupData;
