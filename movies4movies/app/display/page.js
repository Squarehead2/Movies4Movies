"use client";

import React from "react";
import styleSheet from "./styles/stylesdisplay.js";

import { useState } from "react";
import { useEffect } from "react";

import Modal from "react-modal";
import PopupModal from "./components/popupmodal.js";
import { hover, hoverOut } from "./components/hoverBoxFunctions/hoverBox1.js";
import openPopup from "./components/openPopup.js";
import closePopup from "./components/closePopup.js";
import mixUp from "./components/mixUp.js";
import getMovie from "./components/getMovie.js";
import PosterImage from "./components/posterImage.js";
import delay from "./components/delay.js";
var styles = styleSheet;

// Example usage:

export default function Page(genreName) {
  const [movieList, setMovieList] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]); // Assuming you have a state variable to hold mixed movies
  const [movieRuntime, setMovieRuntime] = useState([]); // Assuming you have a state variable to hold mixed movies
  const [movieDirector, setMovieDirector] = useState([]); // Assuming you have a state variable to hold mixed movies

  const getDirector = (movie) =>
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=895db7be0d980a68b41e198570f689fd`
    )
      .then((response) => response.json())
      .then((jsonData) => jsonData.crew.filter(({ job }) => job === "Director"))
      .then((director) => setMovieDirector(director[0].name))
      .catch((error) => {
        console.error(error);
      });
  console.log(genreName.searchParams.genreID);

  const getMovieRuntime = async (movie) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=895db7be0d980a68b41e198570f689fd`
    )
      .then((response) => response.json())
      .then((json) => setMovieRuntime(json.runtime));
    console.log(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=895db7be0d980a68b41e198570f689fd`
    );
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(movieList);
    if (movieList !== undefined) {
      if (movieList.length < 3) {
        getMovie(setMovieList, genreName.searchParams.genreID);
      }
      if (movieList.length > 0) {
        setIsLoading(false);
      }
    }
  }, [movieList]);

  useEffect(() => {
    getMovie(setMovieList, genreName.searchParams.genreID);
  }, []);

  //mix up randomMovies

  // console.log(randomMovies[0].title);

  const [hoverBottom1, setHoverBottom1] = useState("0px");
  const [hoverBottom2, setHoverBottom2] = useState("0px");
  const [hoverBottom3, setHoverBottom3] = useState("0px");
  const [hoverButton, setHoverButton] = useState("0px");
  const [hoverButton2, setHoverButton2] = useState("0px");
  const [click, setClick] = useState(false); //click state

  const [textHover1, setTextHover1] = useState("black");
  const [textHover2, setTextHover2] = useState("black");
  const [textHover3, setTextHover3] = useState("black");

  const [textSize1, setTextSize1] = useState("36px");
  const [textSize2, setTextSize2] = useState("36px");
  const [textSize3, setTextSize3] = useState("36px");

  const [modals, setModals] = useState({
    movie1: false,
    movie2: false,
    movie3: false,
  });

  //function to rerandomize movies

  const randomize = () => {
    getMovie(setMovieList, genreName.searchParams.genreID);
    setClick(true);
    setHoverButton("20px");
    mixUp(randomMovies, movieList);

    setHoverButton2("0px");
    delay(150).then(() => {
      setClick(false);
      setHoverButton("0px");
    });
  };

  const hoverClick = (setHoverBottom) => {
    if (click === false) {
      setHoverBottom("10px");
    }
  };

  if (isLoading) {
    movieList.map((movie) => {
      randomMovies.push(movie);
    });
    return <div>Loading...</div>;
  } else
    return (
      <div className="Frame1" style={styles.frame1}>
        <div className="Group1" style={styles.group1}>
          <div className="Horror" style={styles.genre}>
            {genreName.searchParams.genreName}
          </div>
        </div>

        <div
          className="Rectangle3"
          style={{ ...styles.rectangle3, paddingTop: hoverButton2 }}
          onMouseOver={() => hoverClick(setHoverButton2)}
          onMouseOut={() => hoverOut(setHoverButton2)}
        >
          <button
            className="Randomize"
            style={{ ...styles.randomize, paddingBottom: hoverButton }}
            onClick={randomize}
          >
            Randomize
          </button>
        </div>

        <div className="Movies Selection" style={styles.movieSelect}>
          {/* Box1                                            
          
          
          
          
          
          */}
          <div
            className="Group1"
            style={{ ...styles.box1, bottom: hoverBottom1 }}
            onMouseOver={() => hover(setHoverBottom1)}
            onMouseOut={() => hoverOut(setHoverBottom1)}
          >
            <p
              className="Movie1"
              style={{
                ...styles.movie,
                color: textHover1,
                fontSize: textSize1,
              }}
              onClick={() =>
                openPopup(
                  "movie1",
                  randomMovies[0],
                  modals,
                  getMovieRuntime,
                  getDirector,
                  setModals
                )
              }
            >
              {randomMovies[0].title}
            </p>
            <div
              onClick={() =>
                openPopup(
                  "movie1",
                  randomMovies[0],
                  modals,
                  getMovieRuntime,
                  getDirector,

                  setModals
                )
              }
            >
              <PosterImage poster_path={randomMovies[0].poster_path} />
            </div>
            <PopupModal
              isOpen={modals.movie1}
              handleClose={() =>
                closePopup("movie1", modals, setModals, setHoverBottom1)
              }
              movieName={randomMovies[0].title}
              movieDesc={randomMovies[0].overview}
              movieRating={randomMovies[0].vote_average}
              movieLength={movieRuntime}
              poster_path={randomMovies[0].poster_path}
              movieDate={randomMovies[0].release_date}
              movieDirector={movieDirector}
            />
          </div>
          {/* Box 2   
          
          
          
          
          
          
          */}
          <div
            className="Group1"
            style={{ ...styles.box2, bottom: hoverBottom2 }}
            onMouseOver={() => hover(setHoverBottom2)}
            onMouseOut={() => hoverOut(setHoverBottom2)}
          >
            <p
              className="Movie2"
              style={{
                ...styles.movie,
                color: textHover2,
                fontSize: textSize2,
              }}
              onClick={() =>
                openPopup(
                  "movie2",
                  randomMovies[1],
                  modals,
                  getMovieRuntime,
                  getDirector,
                  setModals
                )
              }
            >
              {randomMovies[1].title}
            </p>
            <div
              onClick={() =>
                openPopup(
                  "movie2",
                  randomMovies[1],
                  modals,
                  getMovieRuntime,
                  getDirector,
                  setModals
                )
              }
            >
              <PosterImage poster_path={randomMovies[1].poster_path} />
            </div>
            <PopupModal
              isOpen={modals.movie2}
              handleClose={() =>
                closePopup("movie2", modals, setModals, setHoverBottom2)
              }
              movieName={randomMovies[1].title}
              movieDesc={randomMovies[1].overview}
              movieRating={randomMovies[1].vote_average}
              movieLength={movieRuntime}
              poster_path={randomMovies[1].poster_path}
              movieDate={randomMovies[1].release_date}
              movieDirector={movieDirector}
            />
          </div>
          {/* Box3                              







*/}
          <div
            className="Group1"
            style={{ ...styles.box3, bottom: hoverBottom3 }}
            onMouseOver={() => hover(setHoverBottom3)}
            onMouseOut={() => hoverOut(setHoverBottom3)}
          >
            <p
              className="Movie3"
              style={{
                ...styles.movie,
                color: textHover3,
                fontSize: textSize3,
              }}
              onClick={() =>
                openPopup(
                  "movie3",
                  randomMovies[2],
                  modals,
                  getMovieRuntime,
                  getDirector,
                  setModals
                )
              }
            >
              {randomMovies[2].title}
            </p>
            <div
              onClick={() =>
                openPopup(
                  "movie3",
                  randomMovies[2],
                  modals,
                  getMovieRuntime,
                  getDirector,
                  setModals
                )
              }
            >
              <PosterImage poster_path={randomMovies[2].poster_path} />
            </div>
            <PopupModal
              isOpen={modals.movie3}
              handleClose={() =>
                closePopup("movie3", modals, setModals, setHoverBottom3)
              }
              movieName={randomMovies[2].title}
              movieDesc={randomMovies[2].overview}
              movieRating={randomMovies[2].vote_average}
              movieLength={movieRuntime}
              poster_path={randomMovies[2].poster_path}
              movieDate={randomMovies[2].release_date}
              movieDirector={movieDirector}
            />
          </div>
        </div>
      </div>
    );
}
