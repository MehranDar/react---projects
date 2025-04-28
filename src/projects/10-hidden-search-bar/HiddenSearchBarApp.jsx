import React, { useEffect, useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const HiddenSearchBarApp = () => {
  const [uiPros, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transitions: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    BorderBottomColor: "#fff",
  });
  let body = document.body.style;

  let inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    borfer: "none",
    outLine: "none",
    BorderBottom: `1px solid #333`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: uiPros.opacity,
    transitions: "all .3s ease",
  };

  let bsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    cusrsor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  const inputEl = useRef(null);

  useEffect(
    () => {
      body.background = uiPros.bg;
      body.boxShadow = uiPros.shadow;
      body.transition = uiPros.transitions;
      uiPros.showSearchBar && inputEl.current.focus();
    },
    [uiPros.shadow],
    [uiPros.showSearchBar]
  );

 const showSearch = () => {
  setUiProps({
    opacity: 1,
    showSearchIcon: false,
    showSearchBar: true,
  });
};

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
      BorderBottomColor: "green",
    });
  };
  const handlesearchBlur = () => {
    setUiProps({
      shadow: "none",
      opacity: 0,
      BorderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {uiPros.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      ) : (
        <input
          type="text"
          placeholder="Search"
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handlesearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
};

export default HiddenSearchBarApp;
