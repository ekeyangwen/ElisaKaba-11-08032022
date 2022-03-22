import React from "react";

const Tags = ({ tags }) => {
  let listeTags = tags.map((tag) => <li className="tag">{tag}</li>);
  return (
    <div className="listeTags">
      <ul className="eachTag">{listeTags}</ul>
    </div>
  );
};

export default Tags;
