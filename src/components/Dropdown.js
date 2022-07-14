const Dropdown = ({ title, content, list, id }) => {


  return (
    <div className="dropdownList">
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
              {list.map((element, id) => (
                <li key={id} className="element">
                  {element}
                </li>
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
