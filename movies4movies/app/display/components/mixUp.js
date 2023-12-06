"use client";
import React from "react";

const mixUp = (randomMovies, movieList) => {
  //mix up the movies but prevent duplicates in the randomMovies array

  const firstMovie = Math.floor(Math.random() * movieList.length);
  const secondMovie = Math.floor(Math.random() * movieList.length);
  const thirdMovie = Math.floor(Math.random() * movieList.length);
  if (firstMovie === secondMovie) {
    if (firstMovie === 0) {
      randomMovies[0] = movieList[1];
    } else {
      randomMovies[0] = movieList[firstMovie - 1];
    }
  } else {
    randomMovies[0] = movieList[firstMovie];
  }

  if (secondMovie === thirdMovie) {
    if (secondMovie === 0) {
      randomMovies[1] = movieList[1];
    } else {
      randomMovies[1] = movieList[secondMovie - 1];
    }
  } else {
    randomMovies[1] = movieList[secondMovie];
  }

  if (thirdMovie === firstMovie) {
    if (thirdMovie === 0) {
      randomMovies[2] = movieList[1];
    } else {
      randomMovies[2] = movieList[thirdMovie - 1];
    }
  } else {
    randomMovies[2] = movieList[thirdMovie];
  }
};
export default mixUp;
