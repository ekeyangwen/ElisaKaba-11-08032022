import React from "react";

const Tags = ({ tags, id }) => {
  let listeTags = tags.map((tag) => (
    <li key={id} className="tag">
      {tag}
    </li>
  ));

  return (
    <span className="listeTags">
      <ul className="eachTag">{listeTags}</ul>
    </span>
  );
};

export default Tags;
