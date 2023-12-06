// popupmodal.js
const styleSheet = {
  modal: {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
    },
    content: {
      display: "flex",
      flexDirection: "column",

      width: "500px", // width of the modal
      margin: "auto", // center the modal horizontally
      backgroundColor: "#fff",
      background:
        "linear-gradient(0deg, #B6AEAE 0%, #B6AEAE 100%), linear-gradient(180deg, rgba(20.26, 42.75, 100.58, 0.40) 14%, rgba(0, 0, 0, 0.40) 100%)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      height: "500px",
    },
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3498db",
    color: "#fff",
    cursor: "pointer",
  },
  centerbox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
};

export default styleSheet;
