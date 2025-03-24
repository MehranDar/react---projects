import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

import MeMe from "./imagefolder/mejpg.JPEG";

const LikePhotoApp = () => {
  // let like=true;
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div
      style={{ paddingTop: "3rem", marginBottom: "1rem" }}
      className="container text-center"
    >
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle mt-4 "} text={`likes ${count}`} />
      <div
        className="card card-dark shadow-sm "
        style={{
          width: 300,
          cursor: "pointer",
          margin: "auto",
          marginTop: "2rem",
        }}
       
      >
        <div className="card-header fs-xl">
          <AiFillSmile style={{ marginRight: "12rem" }} />
          <small style={{ fontSize: "large" }}>MeMe</small>
        </div>
        <img src={MeMe} alt="img" style={{ height: "fit-content" }}
         onDoubleClick={toggleLike} />

        <div
          className="card-footer fs-xl d-flex"
          style={{
            justifyContent: "space-between",
            fontsize: "large",
            display: "flex",
          }}
         
        >
          <AiOutlineComment />
          {""}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikePhotoApp;
