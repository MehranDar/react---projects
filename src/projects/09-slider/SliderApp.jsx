import React, { useState } from "react";
import SliderComponent from "./SliderComponent";
import Title from "../components/Title";
const SliderApp = () => {
  const [slideValue, setSlideValue] = useState(0);
  const hamdleSlidevalueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgColor;
  let textColor;

  if (slideValue < 25) {
    bgColor = "red";
    textColor = "red";
  }
  if (slideValue < 25 && slideValue <= 50) {
    bgColor = "blue";
  }
  if (slideValue > 51 && slideValue <= 75) {
    bgColor = "green";
    textColor = "white";
  }
  if (slideValue > 75) {
    bgColor = "green";
  }
  return (
    <div className="container text-center">
      <Title text={"slide to grow"} />
      <SliderComponent
        setValue={slideValue}
        handleInput={hamdleSlidevalueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
};

export default SliderApp;
