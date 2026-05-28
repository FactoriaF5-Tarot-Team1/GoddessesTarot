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
    <div className="cards">
      <Fan
        shuffledCards={shuffledCards}
        selectCard={selectCard}
        selectedCards={selectedCards}
      />
    </div>

    {modalCard && (
  <TarotModal card={modalCard} onClose={closeModal} />
)}
  </>
); 