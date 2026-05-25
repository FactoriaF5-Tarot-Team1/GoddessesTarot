import { useState } from "react";
import shuffleIds from "../utils/shuffleIds";

function useFanCards() {
  const [shuffledIds] = useState(() => shuffleIds());
  const [selectedCards, setSelectedCards] = useState([]);
  const [modalCard, setModalCard] = useState(null);

  const turns = ["pasado", "presente", "futuro"];
  const currentTurn = turns[selectedCards.length];

  function selectCard(cardData) {
    if (selectedCards.length >= 3) return;
    setSelectedCards([...selectedCards, cardData]);
  }

  function openModal(cardData) {
    setModalCard(cardData);
  }

  function closeModal() {
    setModalCard(null);
  }

  return {
    shuffledIds,
    selectedCards,
    currentTurn,
    selectCard,
    isFinished,
    modalCard,
    openModal,
    closeModal,
  };
}

export default useFanCards;
