import Button from "../button/Button";
import Bin from "../../assets/icons/bin.svg";
import Wand from "../../assets/icons/wand.svg";
import btnSave from "../../assets/icons/btn-save2.svg";
import styles from "./ReadingCardHistoryContainer.module.scss";
import { useReading } from "../../context/ReadingContext";
import { useState } from "react";
import TarotModal from "../modal/tarot-modal/TarotModal";

function ReadingCardHistoryContainer({ reading }) {
  const { name, date, time, cards } = reading;

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [modalCard, setModalCard] = useState(null);

  const { deleteReading, updateReading } = useReading();

  const openModal = (card) => setModalCard(card);
  const closeModal = () => setModalCard(null);

  return (
    <section className={styles.cardHistoryWrapper}>
      <h3 className={styles.readingDate}>{date}</h3>

      <div className={styles.readingContainer}>
        <div className={styles.readingInfo}>
          {isEditing ? (
            <input
              className={styles.editInput}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          ) : (
            <p className={styles.readingName}>Lectura de {name}</p>
          )}

          <p className={styles.readingTime}>{time} h</p>
        </div>

        <ul className={styles.cards}>
          <li className={styles.card} onClick={() => openModal(cards?.past)}>
            <img
              src={cards?.past?.arcaneImage?.imageSrc}
              alt={cards?.past?.arcaneName || "Carta del pasado"}
            />
            <p className={styles.cardLabel}>Pasado</p>
            <span className={styles.cardName}>{cards?.past?.arcaneName}</span>
          </li>

          <li className={styles.card} onClick={() => openModal(cards?.present)}>
            <img
              src={cards?.present?.arcaneImage?.imageSrc}
              alt={cards?.present?.arcaneName || "Carta del presente"}
            />
            <p className={styles.cardLabel}>Presente</p>
            <span className={styles.cardName}>
              {cards?.present?.arcaneName}
            </span>
          </li>

          <li className={styles.card} onClick={() => openModal(cards?.future)}>
            <img
              src={cards?.future?.arcaneImage?.imageSrc}
              alt={cards?.future?.arcaneName || "Carta del futuro"}
            />
            <p className={styles.cardLabel}>Futuro</p>
            <span className={styles.cardName}>{cards?.future?.arcaneName}</span>
          </li>
        </ul>

        <div className={styles.actions}>
          {isEditing ? (
            <Button
              variant="primary"
              onClick={() => {
                updateReading(reading.id, { name: newName });
                setIsEditing(false);
              }}
            >
              <img src={btnSave} alt="Icono de varita mágica" />
              Guardar
            </Button>
          ) : (
            <Button variant="primary" onClick={() => setIsEditing(true)}>
              <img src={Wand} alt="Icono de varita mágica" />
              Editar
            </Button>
          )}

          <Button variant="delete" onClick={() => deleteReading(reading.id)}>
            <img src={Bin} alt="Icono de papelera" />
            Eliminar
          </Button>
        </div>
      </div>
      {modalCard && <TarotModal card={modalCard} onClose={closeModal} />}
    </section>
  );
}

export default ReadingCardHistoryContainer;
