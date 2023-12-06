"use client";

import React from "react";
import Modal from "react-modal";

const closePopup = (movie, modals, setModals, setHoverBottom) => {
  setModals({ ...modals, [movie]: false });
  setHoverBottom("0px");
};
export default closePopup;
