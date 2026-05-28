import { useState } from "react";
import cardBack from "../../assets/images/card-back.png";
import styles from "./CardFan.module.scss";

function CardFan({ card, selectCard, isDisabled, style }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  function handleClick() {
    if (isSelected || isDisabled) return;

    setIsSelected(true);

    // SOLO selecciona la carta
    selectCard(card);
  }

   return (
    <div
      style={style}
      className={`${styles.cardFan} ${
        isSelected ? styles.selected : ""
      } ${isDisabled ? styles.disabled : ""}`}
      onClick={handleClick}
    >
      <img src={cardBack} alt="carta del tarot boca abajo" />
    </div>
  );
}

export default CardFan;