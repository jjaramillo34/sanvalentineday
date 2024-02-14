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

function PoemModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Poema de amor"
    >
      <p>
        {" "}
        Cristina Selene, destello de mi ser,
        <br />
        Rima tu nombre en versos de placer.
        <br />
        Inmensa luz que ilumina mi existir,
        <br />
        Sé mi musa, mi amor, mi porvenir.
        <br />
        Tus ojos, dos luceros que guían mi andar,
        <br />
        Inspiran mis sueños al brillar.
        <br />
        Navego en el mar de tu mirada,
        <br />
        Al abrazo de tu alma, mi morada.
        <br />
        <br />
        Sutil como el viento, dulce como la miel,
        <br />
        Eres el sueño que anhelo, mi querer fiel.
        <br />
        Llena de gracia, de encanto y de pasión,
        <br />
        Eres la melodía de mi corazón.
        <br />
        Nuestro amor, cual poesía que no tiene final,
        <br />
        Escribe en el universo su propio sonar.
        <br />
        <br />
        Cristina Selene, mi amor eterno,
        <br />
        Juntos, en este verso, fundamos nuestro invierno.{" "}
      </p>
      <button onClick={onRequestClose} className="photo-modal-close">
        Cerrar
      </button>
    </Modal>
  );
}

export default PoemModal;
