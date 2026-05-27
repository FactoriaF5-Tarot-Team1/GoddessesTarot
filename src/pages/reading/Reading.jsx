import React from "react";
import Fan from "../../components/fan/Fan";
import TurnIndicator from "../../components/turn-indicator/TurnIndicator";
import useFanCards from "../../hooks/useFanCards";

function Reading() {
  const { shuffledIds, selectCard, selectedCards, currentTurn } = useFanCards();

  return (
    <>
      <Fan
        shuffledIds={shuffledIds}
        selectCard={selectCard}
        selectedCards={selectedCards}
      ></Fan>
      <TurnIndicator currentTurn={currentTurn} />
    </>
  );
}

export default Reading;
