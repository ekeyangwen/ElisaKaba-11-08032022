import React from "react";

const Tags = ({ tags, id }) => {

  return (
    <ul className="eachTag">
      {tags.map((tag) => {
        return (
          <li key={tag} className="tag">
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
