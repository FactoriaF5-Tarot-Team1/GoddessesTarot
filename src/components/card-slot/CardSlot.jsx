import styles from "./CardSlot.module.scss";

const descriptions = {
  pasado: "La base empírica de tu situación actual.",
  presente: "El momento que estás viviendo ahora.",
  futuro: "El camino que se abre ante ti.",
};

function CardSlot({ turn, card, openModal }) {
  return (
    <div className={styles.cardSlot}>
      <h2 className={styles.title}>
        {turn.charAt(0).toUpperCase() + turn.slice(1)}
      </h2>
      <div
        className={`${styles.cardContainer} ${card ? styles.filled : styles.empty}`}
      >
        {card && (
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            onClick={() => openModal(card)}
          />
        )}
      </div>
      <p className={styles.description}>{descriptions[turn]}</p>
    </div>
  );
}

export default CardSlot;
