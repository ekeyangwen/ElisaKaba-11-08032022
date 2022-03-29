const Dropdown = ({ title, content, list, id }) => {
  // const [data, setData] = useState([]);
  if (list) {
    <ul key={id}>
      {list.map((element) => (
        <li>{element}</li>
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
            <ul>
              {list.map((element) => (
                <li>{element}</li>
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
