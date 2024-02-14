import React from "react";
import Modal from "react-modal";

// import styles.css from "./assets/styles.css";
import "../assets/styles.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
};

Modal.setAppElement("#root");

function PhotoModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Foto de nosotros"
    >
      <h2>Te amo, mi amor</h2>
      <img
        src={require("../assets/photo.jpg")}
        alt="Nosotros"
        className="photo-modal-image"
      />
      <button onClick={onRequestClose} className="photo-modal-close">
        Cerrar
      </button>
    </Modal>
  );
}

export default PhotoModal;
