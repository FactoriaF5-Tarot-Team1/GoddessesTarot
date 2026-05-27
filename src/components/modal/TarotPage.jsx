import { useEffect, useState } from "react";
import TarotModal from "../../components/TarotModal/TarotModal";

export default function TarotPage() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch("https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error(error));
  }, []);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setOpenModal(true);
  };

  return (
    <>
      <div className="cards-grid">
        {cards.map((card) => (
          <img
            key={card.id}
            src={card.goddessImage}
            alt={card.goddessName}
            onClick={() => handleOpenModal(card)}
            style={{ width: "200px", cursor: "pointer" }}
          />
        ))}
      </div>

      <TarotModal
        card={selectedCard}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}