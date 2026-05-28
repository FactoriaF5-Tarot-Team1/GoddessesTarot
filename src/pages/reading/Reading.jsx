import React from "react";
import styles from "./Reading.module.scss";

import TarotModal from "../../components/modal/TarotModal";
import line from "../../assets/icons/line.svg";

import Fan from "../../components/fan/Fan";
import TurnIndicator from "../../components/turn-indicator/TurnIndicator";
import CardSlot from "../../components/card-slot/CardSlot";

import useFanCards from "../../hooks/useFanCards";

function Reading() {
  const {
    shuffledCards,
    selectCard,
    selectedCards,
    currentTurn,
    openModal,
    modalCard,
    closeModal,
  } = useFanCards();

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

      {/* 🔮 MODAL (ESTO ES LO QUE TE FALTABA) */}
      {modalCard && <TarotModal card={modalCard} onClose={closeModal} />}
    </>
  );
}

export default Reading;
