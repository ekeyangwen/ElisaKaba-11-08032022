const Stars = ({ logement }) => {
  const greyStars = "../../../img/Vector-star-grey.png";
  const redStars = "../../../img/Vector-star.png";
  const starsValue = 5;
  let i = logement;

  console.log(i);
  for (i = 1; i < starsValue; i++) {
    console.log(i <= starsValue);
    if (i <= starsValue) {
      let image = document.querySelectorAll(".image");
      image.forEach((img) => {
        img.setAttribute("src", redStars);
      });
    }
  }
  // const dataCompare = () => {
  //   for (let i = 1; i < starsValue; i++) {
  //     console.log(i);
  //     if (i <= index) {
  //       document.getElementById(i).setAttribute("src", redStars);
  //     } else {
  //       document.getElementById(i).setAttribute("src", greyStars);
  //     }
  //   }
  // };

  // dataCompare();

  return (
    <>
      <h1>{logement}</h1>
      <span className="oneStar">
        <img className="image" src={greyStars} alt="Etoile" index="1"></img>
      </span>
      <span className="oneStar">
        <img className="image" src={greyStars} alt="Etoile" index="2"></img>
      </span>
      <span className="oneStar">
        <img className="image" src={greyStars} alt="Etoile" index="3"></img>
      </span>
      <span className="oneStar">
        <img className="image" src={greyStars} alt="Etoile" index="4"></img>
      </span>
      <span className="oneStar">
        <img className="image" src={greyStars} alt="Etoile" index="5"></img>
      </span>
    </>
  );
};

export default Stars;
