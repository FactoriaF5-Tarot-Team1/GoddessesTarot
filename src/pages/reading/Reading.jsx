import React from "react";
import styles from "./Reading.module.scss";
import Fan from "../../components/fan/Fan";
import TurnIndicator from "../../components/turn-indicator/TurnIndicator";
import CardSlot from "../../components/card-slot/CardSlot";
import useFanCards from "../../hooks/useFanCards";

function Reading() {
  const { shuffledIds, selectCard, selectedCards, currentTurn, openModal } =
    useFanCards();

  return (
    <>
      <div className={styles.readingFan}>
        <Fan
          shuffledIds={shuffledIds}
          selectCard={selectCard}
          selectedCards={selectedCards}
        ></Fan>
        <TurnIndicator currentTurn={currentTurn} />
      </div>
      <div className={styles.slotsContainer}>
        <CardSlot turn="pasado" card={selectedCards[0]} openModal={openModal} />
        <CardSlot
          turn="presente"
          card={selectedCards[1]}
          openModal={openModal}
        />
        <CardSlot turn="futuro" card={selectedCards[2]} openModal={openModal} />
      </div>
    </>
  );
}

export default Reading;
