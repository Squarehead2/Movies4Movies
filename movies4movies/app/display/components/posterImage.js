"use client";

import React from "react";
import { useState } from "react";

export default function PosterImage(poster_path) {
  const [grayscale, setGrayscale] = useState("100%");
  const [blur, setBlur] = useState("0px");

  const hoverGray = (grayscale, setGrayscale) => {
    setGrayscale("0%");
  };

  const hoverGrayOut = (grayscale, setGrayscale) => {
    setGrayscale("100%");
  };

  const hoverBlur = (blur, setBlur) => {
    setBlur("10px");
  };

  const hoverBlurOut = (blur, setBlur) => {
    setBlur("0px");
  };

  const handleHover = () => {
    hoverGray(grayscale, setGrayscale);
    hoverBlur(blur, setBlur);
  };

  const handleHoverOut = () => {
    hoverGrayOut(grayscale, setGrayscale);
    hoverBlurOut(blur, setBlur);
  };

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path.poster_path}`}
        width="500px"
        style={{
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          //fade the bottom
          filter: `grayscale(${grayscale})`,
        }}
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      />
    </div>
  );
}
