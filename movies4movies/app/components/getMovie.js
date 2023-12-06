"use client";
import React from "react";
const getMovie = async (setMovieList, genreID) => {
  const randomNumber = Math.floor(Math.random() * 25);
  console.log(genreID);
  console.log(randomNumber);
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=895db7be0d980a68b41e198570f689fd&with_genres=${genreID}&page=` +
      randomNumber
  )
    .then((response) => response.json())
    .then((json) => setMovieList(json.results));
};
export default getMovie;
