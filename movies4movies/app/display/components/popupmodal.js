"use client";

import React from "react";
import Modal from "react-modal";
import styleSheet from "./styles/popupmodal"; // Import the styles

var styles = styleSheet;

// Modal component using the styles
const PopupModal = ({
  isOpen,
  handleClose,
  movieName,
  movieDesc,
  movieRating,
  movieLength,
  poster_path,
  movieDate,
  movieDirector,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{ ...styles.modal, overFlowY: "scroll" }}
      ariaHideApp={false} // Add this to prevent a11y issue on screen readers
    >
      <div style={styles.content}>
        <button onClick={handleClose} style={styles.button}>
          Close
        </button>

        <div style={styles.centerbox}>
          <h2 style={styles.title}> {movieName}</h2>
        </div>

        <div style={styles.centerbox}></div>
        <p style={styles.text}>{movieDesc}</p>
        <p>Rating: {movieRating} / 10 </p>
        <p>Length: {movieLength} minutes</p>
        <p>Release Date: {movieDate}</p>
        <p>Director: {movieDirector}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width="500px"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          }}
        />
      </div>
    </Modal>
  );
};

export default PopupModal;
