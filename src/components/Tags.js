import React from "react";

const Tags = ({ tags, id }) => {
  // let listeTags = tags.map((tag) => (
  //   <li key={id} className="tag">
  //     {tag}
  //   </li>
  // ));

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
