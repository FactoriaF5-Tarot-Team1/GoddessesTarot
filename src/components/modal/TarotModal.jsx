import styles from "./TarotModal.module.scss";

function TarotModal({ card, onClose }) {
  if (!card) return null;
  console.log(card);
  console.log(card.author);
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* GODDESS */}
        <div className={styles.goddessSection}>
          <img
            className={styles.goddessImage}
            src={card.goddessImage?.imageSrc || ""}
            alt={card.goddessName || "Goddess"}
          />

          <div className={styles.goddessContent}>
            <p className={styles.goddessSubtitle}>Goddess of Wisdom</p>

            <h2 className={styles.goddessName}>{card.goddessName}</h2>

            <p className={styles.goddessDescription}>
              {card.goddessDescription}
            </p>
          </div>
        </div>

        {/* TAROT */}
        <div className={styles.content}>
          <p className={styles.subtitle}>Arcano revelado</p>

          <h2 className={styles.title}>{card.arcaneName}</h2>

          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={card.arcaneImage?.imageSrc || ""}
              alt={card.arcaneName || "Arcano"}
            />
          </div>

          <div className={styles.line}></div>

          <p className={styles.description}>{card.arcaneDescription}</p>

          <p className={styles.copyright}>
            Copyright © {card.arcaneImage?.author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TarotModal;
