"use client";
import React from "react";

import styleSheet from "./styles/stylesapp.js";
import { useState } from "react";
import { hover, hoverOut } from "./components/hover.js";
import Link from "next/link.js";
import getMovie from "./components/getMovie.js";
import { useEffect } from "react";
import MovieImgFade from "./components/movieImgFade.js";

var styles = styleSheet;

export default function Page() {
  const [horrorHoverBottom, setHorrorHoverBottom] = useState(0);
  const [comedyHoverBottom, setComedyHoverBottom] = useState(0);
  const [actionHoverBottom, setActionHoverBottom] = useState(0);
  const [thrillerHoverBottom, setThrillerHoverBottom] = useState(0);
  const [dramaHoverBottom, setDramaHoverBottom] = useState(0);
  const [romanceHoverBottom, setRomanceHoverBottom] = useState(0);
  const [animatedHoverBottom, setAnimatedHoverBottom] = useState(0);
  const [scifiHoverBottom, setScifiHoverBottom] = useState(0);
  const [documentaryHoverBottom, setDocumentaryHoverBottom] = useState(0);
  const [movieList, setMovieList] = useState([]);
  console.log(comedyHoverBottom);

  return (
    <div className="Frame1" style={styleSheet.frame1}>
      <div className="Movies4movies" style={styleSheet.movies4movies}>
        Movies4Movies
      </div>
      <Link href={`/display?genreName=${"Horror"}&genreID=${27}`}>
        <div
          className="Group1"
          style={{
            ...styles.group1,
            placeSelf: "auto",
            paddingBottom: horrorHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setHorrorHoverBottom(20)}
          onMouseOut={() => setHorrorHoverBottom(0)}
        >
          <div
            className="Rectangle2"
            style={{
              ...styleSheet.rectangle2,
            }}
          />
          <p className="Horror" style={styleSheet.genrebox}>
            Horror
            <MovieImgFade genreID={27} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Comdey"}&genreID=${35}`}>
        <div
          className="Group2"
          style={{
            ...styles.group1,
            placeSelf: "auto",
            paddingBottom: comedyHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setComedyHoverBottom(20)}
          onMouseOut={() => setComedyHoverBottom(0)}
        >
          <div className="Rectangle3" style={{ ...styles.rectangle2 }} />
          <p className="Comedy" style={styles.genrebox}>
            Comedy
            <MovieImgFade genreID={35} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Action/Adventure"}&genreID=${28}`}>
        <div
          className="Group4"
          style={{
            ...styles.group1,
            paddingBottom: actionHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setActionHoverBottom(20)}
          onMouseOut={() => setActionHoverBottom(0)}
        >
          <div
            className="Rectangle5"
            style={{
              ...styles.rectangle2,
            }}
          />
          <p className="ActionAdventure" style={styles.genrebox}>
            Action/Adventure
            <MovieImgFade genreID={28} />
          </p>
        </div>
      </Link>

      <Link href={`/display?genreName=${"Thriller"}&genreID=${53}`}>
        <div
          className="Group5"
          style={{
            ...styles.group1,
            paddingBottom: thrillerHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setThrillerHoverBottom(20)}
          onMouseOut={() => setThrillerHoverBottom(0)}
        >
          <div className="Rectangle6" style={{ ...styles.rectangle2 }} />
          <p className="Thriller" style={styles.genrebox}>
            Thriller
            <MovieImgFade genreID={53} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Drama"}&genreID=${18}`}>
        <div
          className="Group6"
          style={{
            ...styles.group1,
            paddingBottom: dramaHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setDramaHoverBottom(20)}
          onMouseOut={() => setDramaHoverBottom(0)}
        >
          <div className="Rectangle7" style={{ ...styles.rectangle2 }} />
          <p className="Drama" style={styles.genrebox}>
            Drama
            <MovieImgFade genreID={18} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Romance"}&genreID=${10749}`}>
        <div
          className="Group7"
          style={{
            ...styles.group1,
            paddingBottom: romanceHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setRomanceHoverBottom(20)}
          onMouseOut={() => setRomanceHoverBottom(0)}
        >
          <div className="Rectangle8" style={{ ...styles.rectangle2 }} />
          <p className="Romance" style={styles.genrebox}>
            Romance
            <MovieImgFade genreID={10749} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Animated"}&genreID=${16}`}>
        <div
          className="Group9"
          style={{
            ...styles.group1,
            paddingBottom: animatedHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setAnimatedHoverBottom(20)}
          onMouseOut={() => setAnimatedHoverBottom(0)}
        >
          <div
            className="Rectangle8"
            style={{
              ...styles.rectangle8,
            }}
          />
          <p className="Animated" style={styles.genrebox}>
            Animated
            <MovieImgFade genreID={16} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Sci-fi Fantasy"}&genreID=${14}`}>
        <div
          className="Group10"
          style={{
            ...styles.group1,
            paddingBottom: scifiHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setScifiHoverBottom(20)}
          onMouseOut={() => setScifiHoverBottom(0)}
        >
          <div className="Rectangle8" style={{ ...styles.rectangle2 }} />
          <p className="SciFiFantasy" style={styles.genrebox}>
            Sci-Fi/Fantasy
            <MovieImgFade genreID={14} />
          </p>
        </div>
      </Link>
      <Link href={`/display?genreName=${"Documentary"}&genreID=${99}`}>
        <div
          className="Group8"
          style={{
            ...styles.group1,
            paddingBottom: documentaryHoverBottom + 200 + "px",
          }}
          onMouseOver={() => setDocumentaryHoverBottom(20)}
          onMouseOut={() => setDocumentaryHoverBottom(0)}
        >
          <div
            className="Rectangle9"
            style={{
              ...styles.rectangle2,
              paddingBottom: documentaryHoverBottom,
            }}
          />
          <p className="Documentary" style={styles.genrebox}>
            Documentary
            <MovieImgFade genreID={99} />
          </p>
        </div>
      </Link>
    </div>
  );
}
