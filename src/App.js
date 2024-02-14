import React, { useState, useRef, useEffect } from "react";
import PhotoModal from "./components/PhotoModal";
import PoemModal from "./components/PoemModal";
import Confetti from "react-confetti";
import AffectionWords from "./components/AffectionWords";
import "./assets/styles.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [poemIsOpen, setPoemIsOpen] = useState(false);
  const confettiRef = useRef(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openPoem = () => {
    setPoemIsOpen(true);
  };

  const closePoem = () => {
    setPoemIsOpen(false);
  };

  useEffect(() => {
    const confetti = confettiRef.current;
    const context = confetti.getContext("2d");
    // Use the context to draw and animate confetti
    context.fillStyle = "red";
    context.fillRect(10, 10, 10, 10);
    context.fillRect(20, 20, 10, 10);
    context.fillRect(30, 30, 10, 10);
    context.fillRect(40, 40, 10, 10);
  }, []);

  return (
    <div className="app">
      <h1 className="app-title">Feliz Día de San Valentín</h1>
      <AffectionWords />
      <Confetti ref={confettiRef} />
      <div className="app-buttons">
        <button className="photo-button" onClick={openModal}>
          Ver una foto
        </button>
        <PhotoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
      <br />
      <br />
      <div className="app-buttons">
        <button className="poem-button" onClick={openPoem}>
          Leer un poema
        </button>
        <PoemModal isOpen={poemIsOpen} onRequestClose={closePoem} />
      </div>
    </div>
  );
}

export default App;
