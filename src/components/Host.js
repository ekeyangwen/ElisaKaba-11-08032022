import React from "react";

const Host = ({ host }) => {
  return (
    <div className="hostNameAndPicture">
      <p className="hostName">{host.name}</p>
      <img className="hostPic" src={host.picture} alt="L'hôte"></img>
    </div>
  );
};

export default Host;
