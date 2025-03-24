import React from "react";
import Title from "../components/Title";
const RandomizeColors = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  const handleSecClick = (e) => {
    // console.log(e.target);
    console.log(getRandomColor());
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-8"} />
      <button
        className="btn btn-danger mt-5"
        onClick={(event) => handleClick(event)}
      >
        Click Me
      </button>
      <button className="btn btn-success mt-5" onClick={handleSecClick}>
        Click Me
      </button>
      <button className="btn btn-primary mt-5" onClick={handleSecClick}>
        Click Me
      </button>
      <button className="btn btn-warning mt-5" onClick={handleSecClick}>
        Click Me
      </button>
    </div>
  );
};

export default RandomizeColors;
