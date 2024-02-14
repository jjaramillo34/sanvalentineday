import React, { useState, useRef, useEffect } from "react";
import PhotoModal from "./components/PhotoModal";
import Confetti from "react-confetti";
import AffectionWords from "./components/AffectionWords";
import "./assets/styles.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const confettiRef = useRef(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const confetti = confettiRef.current;
    const context = confetti.getContext("2d");
    // Use the context to draw and animate confetti
  }, []);

  return (
    <div className="app">
      <h1 className="app-title">Feliz Día de San Valentín</h1>
      <AffectionWords />
      <Confetti ref={confettiRef} />
      <button className="photo-button" onClick={openModal}>
        Ver nuestra foto
      </button>
      <PhotoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default App;
