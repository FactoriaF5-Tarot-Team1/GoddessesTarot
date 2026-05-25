import { useState } from "react";
import { apiTarot } from "../../services/apiTarot";
import cardBack from "../../assets/images/card-back.png";
import styles from "./CardFan.module.scss";

function CardFan({ id, selectCard, isDisabled, style }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  async function handleClick() {
    if (isSelected || isDisabled) return;

    try {
      const api = apiTarot();
      const cardData = await api.getCardById(id);
      setIsSelected(true);
      selectCard(cardData);
    } catch (error) {
      console.error("Error al obtener la carta:", error);
    }
  }

  return (
    <div
      style={style}
      className={`${styles.cardFan} ${isSelected ? styles.selected : ""} ${isDisabled ? styles.disabled : ""} ${isTouched ? styles.touched : ""}`}
      onClick={handleClick}
      onTouchStart={(e) => {
        e.preventDefault();
        setIsTouched(true);
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        setIsTouched(false);
        handleClick();
      }}
      onClick={(e) => {
        if (e.pointerType === "touch") return; // ignora clicks que vienen de touch
        handleClick();
      }}
    >
      <img src={cardBack} alt="carta del tarot boca abajo" />
    </div>
  );
}

export default CardFan;
