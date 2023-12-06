"use client";
import React, { useEffect, useState } from "react";
import getMovie from "./getMovie.js";
import delay from "./delay.js";

export default function MovieImgFade({ style, genreID }) {
  const [movieList1, setMovieList1] = useState([]);
  const [movieList2, setMovieList2] = useState([]);
  const [posterPath1, setPosterPath1] = useState("");
  const [posterPath2, setPosterPath2] = useState("");
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(0);
  const [movie1Fade, setMovie1Fade] = useState(false);

  useEffect(() => {
    getMovie(setMovieList1, genreID);
  }, [genreID]); // Make sure to add genreID as a dependency for useEffect

  // Make sure to add genreID as a dependency for useEffect

  // Check if the movieList has items before accessing its properties

  useEffect(() => {
    if (movieList1 != undefined || movieList1 != null) {
      if (movieList1.length > 0) {
        getMovie(setMovieList2, genreID);
      }
    }
  }, [movieList1]);
  useEffect(() => {
    if (
      (movieList1 != undefined || movieList1 != null) &&
      (movieList2 != undefined || movieList2 != null)
    ) {
      if (movieList1.length > 0 && movieList2.length > 0) {
        console.log(movieList2);
        const randomNumber = Math.floor(Math.random() * 20);
        setPosterPath1(movieList1[randomNumber].poster_path);
        setPosterPath2(movieList2[randomNumber].poster_path);
        console.log(movieList1[randomNumber].title);
      }
    }
  }, [movieList1, movieList2]);

  //every 0.1 seconds reduce the opacity of the top image by 0.1
  const fadeImage1 = () => {
    setTimeout(() => {
      setOpacity1(opacity1 - 0.01);
      setOpacity2(opacity2 + 0.01);

      if (opacity1 <= 0) {
        console.log("test");

        setMovie1Fade(true);
        getMovie(setMovieList1, genreID);
      }
    }, 100);
  };
  const fadeImage2 = () => {
    setTimeout(() => {
      setOpacity1(opacity1 + 0.01);
      setOpacity2(opacity2 - 0.01);

      if (opacity2 <= 0) {
        setMovie1Fade(false);
        getMovie(setMovieList2, genreID);
      }
    }, 100);
  };

  useEffect(() => {
    if (movie1Fade == false) {
      fadeImage1();
    } else {
      fadeImage2();
    }
  }, [opacity1, opacity2]);

  //make it so the image fades in and out between every movie in movie list

  return (
    <div
      style={{ alignContent: "center", alignSelf: "baseline", height: "300px" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath1}`}
        width="572.02px"
        style={{
          background:
            "linear-gradient(180deg, #583838 0%, rgba(0, 0, 0, 0) 100%)",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          //fade the bottom
          opacity: `${opacity1}`,
          filter: `grayscale(100%)`,
          position: "absolute",
        }}
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath2}`}
        width="572.02px"
        style={{
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          background:
            "linear-gradient(180deg, #583838 0%, rgba(0, 0, 0, 0) 100%)",
          opacity: `${opacity2}`,
          //fade the bottom
          position: "absolute",
          filter: `grayscale(100%)`,
        }}
      />
    </div>
  );
}
