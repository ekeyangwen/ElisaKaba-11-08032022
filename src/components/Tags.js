import React from "react";

const Tags = ({ tags, id }) => {
  let listeTags = tags.map((tag) => <li className="tag">{tag}</li>);

  return (
    <div key={tags} className="listeTags">
      <ul className="eachTag">{listeTags}</ul>
    </div>
  );
};

export default Tags;
