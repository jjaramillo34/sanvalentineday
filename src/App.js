import React, { useState } from "react";
import PhotoModal from "./components/PhotoModal";
import AffectionWords from "./components/AffectionWords";
import "./assets/styles.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app">
      <h1 className="app-title">Feliz Día de San Valentín</h1>
      <AffectionWords />
      <button className="photo-button" onClick={openModal}>
        Ver nuestra foto
      </button>
      <PhotoModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default App;
