import useFanCards from "../../hooks/useFanCards";

import TarotModal from "./TarotModal";

import CardSlot from "../card-slot/CardSlot";
import Fan from "../fan/Fan";

export default function TarotPage() {
  const {
    shuffledCards,
    selectedCards,
    selectCard,
    modalCard,
    openModal,
    closeModal,
    currentTurn,
  } = useFanCards();

  return (
    <>
      {/* ABANICO */}
      <div className="cards">
        <Fan
          shuffledCards={shuffledCards}
          selectCard={selectCard}
          selectedCards={selectedCards}
        />
      </div>

      {/* SLOTS */}
      <section className="slotsContainer">
        <CardSlot
          turn="pasado"
          card={selectedCards[0]}
          openModal={openModal}
        />

        <CardSlot
          turn="presente"
          card={selectedCards[1]}
          openModal={openModal}
        />

        <CardSlot
          turn="futuro"
          card={selectedCards[2]}
          openModal={openModal}
        />
      </section>

      {/* MODAL */}
      {modalCard && (
        <TarotModal
          card={modalCard}
          onClose={closeModal}
        />
      )}
    </>
  );
}