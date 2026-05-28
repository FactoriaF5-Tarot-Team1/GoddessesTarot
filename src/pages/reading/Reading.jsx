import React, { useState } from "react";
import styles from "./Reading.module.scss";

import TarotModal from "../../components/modal/TarotModal";
import line from "../../assets/icons/line.svg";

import Fan from "../../components/fan/Fan";
import TurnIndicator from "../../components/turn-indicator/TurnIndicator";
import CardSlot from "../../components/card-slot/CardSlot";

import useFanCards from "../../hooks/useFanCards";
import btnShuffle from "../../assets/icons/btn-shuffle.svg";
import btnSave from "../../assets/icons/btn-save.svg";
import { useReading } from "../../context/ReadingContext";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function Reading() {
  const {
    shuffledIds,
    shuffledCards,
    selectCard,
    selectedCards,
    currentTurn,
    openModal,
    modalCard,
    closeModal,
  } = useFanCards();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reading-name");
  };

  const { readingData, addReadingToHistory } = useReading();

  const [saved, setSaved] = useState(false);

  function handleSave() {
    if (saved) return;
    if (selectedCards.length < 3) return;

    const reading = {
      id: crypto.randomUUID(),
      name: readingData.name,
      date: readingData.date,
      time: readingData.time,
      timestamp: Date.now(),
      cards: {
        past: selectedCards[0],
        present: selectedCards[1],
        future: selectedCards[2],
      },
    };

    addReadingToHistory(reading);
    setSaved(true);
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.readingHero}>
        <div className={styles.textLines}>
          <img src={line} alt="linea" />
          <p>CONEXIÓN CUÁNTICA</p>
          <img src={line} alt="linea" />
        </div>

        <div className={styles.heroContent}>
          <h1>Elige tus cartas</h1>
          <p>
            Permite que la sincronicidad entre los algoritmos del cosmos y tu
            intuición guíen esta tirada.
          </p>
        </div>
      </section>

      {/* FAN */}
      <section className={styles.readingFan}>
        <Fan
          shuffledCards={shuffledCards}
          selectCard={selectCard}
          selectedCards={selectedCards}
          openModal={openModal}
        />

        <TurnIndicator currentTurn={currentTurn} />
      </section>

      {/* SLOTS */}
      <section className={styles.slotsContainer}>
        <CardSlot turn="pasado" card={selectedCards[0]} openModal={openModal} />
        <CardSlot
          turn="presente"
          card={selectedCards[1]}
          openModal={openModal}
        />
        <CardSlot turn="futuro" card={selectedCards[2]} openModal={openModal} />
      </section>

      {modalCard && <TarotModal card={modalCard} onClose={closeModal} />}
      <section className={styles.sectionButons}>
        <Button variant={"primary"} size={"size"} onClick={handleClick}>
          <img src={btnShuffle} alt="icono de barajar de nuevo" /> Barajar de
          nuevo
        </Button>
        <Button
          variant={"secondary"}
          size={"size"}
          onClick={handleSave}
          disabled={saved}
        >
          <img src={btnSave} alt="icono de guardar tirada" /> Guardar tirada
        </Button>
        <p className={`${styles.saved} ${saved ? styles.visible : ""}`}>
          Lectura guardada ✓
        </p>{" "}
      </section>
    </>
  );
}

export default Reading;
