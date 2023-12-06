"use client";

import React from "react";
import Modal from "react-modal";

const openPopup = (
  movie,
  randomMovie,
  modals,
  getMovieRuntime,
  getDirector,
  setModals
) => {
  getMovieRuntime(randomMovie);
  getDirector(randomMovie);

  setModals({ ...modals, [movie]: true });

  // console.log(movie), console.log(modals.movie1);
};
export default openPopup;
