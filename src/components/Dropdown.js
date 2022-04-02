const Dropdown = ({ title, content, list, id }) => {
  if (list) {
    <ul>
      {list.map((element) => (
        <li key={id}>{element}</li>
      ))}
    </ul>;
  }

  return (
    <div className="dropdown">
      <>
        <details>
          <summary>
            {" "}
            <div className="titleAbout"> {title}</div>{" "}
            <img
              className="dropdownBtn"
              src="../../../img/Vector-bas.png"
              alt="Fleche bas"
            />
          </summary>
          {list ? (
            <ul className="listElements">
              {list.map((element) => (
                <li className="element">{element}</li>
              ))}
            </ul>
          ) : (
            <p className="aboutContent">{content}</p>
          )}
        </details>
      </>
    </div>
  );
};

export default Dropdown;
