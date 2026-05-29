import { useEffect, useState } from "react";

function useFanCards() {
  const [shuffledCards, setShuffledCards] = useState([]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [modalCard, setModalCard] = useState(null);

  const turns = ["pasado", "presente", "futuro"];
  const currentTurn = turns[selectedCards.length];

  useEffect(() => {
    async function getCards() {
      try {
        const res = await fetch(
          "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot",
        );
        const data = await res.json();

        // mezclar cartas directamente
        const shuffled = [...data].sort(() => Math.random() - 0.5);

        setShuffledCards(shuffled);
      } catch (error) {
        console.error("Error cargando cartas:", error);
      }
    }

    getCards();
  }, []);

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
    shuffledCards,
    selectedCards,
    currentTurn,
    selectCard,
    modalCard,
    openModal,
    closeModal,
  };
}

export default useFanCards;
