import Button from "../button/Button";
import Bin from "../../assets/icons/bin.svg";
import Wand from "../../assets/icons/wand.svg";
import styles from "./ReadingCardHistoryContainer.module.scss";
import { useReading } from "../../context/ReadingContext";

function ReadingCardHistoryContainer({ reading }) {
  const { name, date, time, cards } = reading;

  const { deleteReading } = useReading();

  return (
    <section className={styles.cardHistoryWrapper}>
      <h3 className={styles.readingDate}>{date}</h3>

      <div className={styles.readingContainer}>
        <div className={styles.readingInfo}>
          <p className={styles.readingName}>Lectura de {name}</p>
          <p className={styles.readingTime}>{time} h</p>
        </div>

        <ul className={styles.cards}>
          <li className={styles.card}>
            <img
              src={cards?.past?.arcaneImage?.imageSrc}
              alt={cards?.past?.arcaneName || "Carta del pasado"}
            />
            <p className={styles.cardLabel}>Pasado</p>
            <span className={styles.cardName}>{cards?.past?.arcaneName}</span>
          </li>

          <li className={styles.card}>
            <img
              src={cards?.present?.arcaneImage?.imageSrc}
              alt={cards?.present?.arcaneName || "Carta del presente"}
            />
            <p className={styles.cardLabel}>Presente</p>
            <span className={styles.cardName}>
              {cards?.present?.arcaneName}
            </span>
          </li>

          <li className={styles.card}>
            <img
              src={cards?.future?.arcaneImage?.imageSrc}
              alt={cards?.future?.arcaneName || "Carta del futuro"}
            />
            <p className={styles.cardLabel}>Futuro</p>
            <span className={styles.cardName}>{cards?.future?.arcaneName}</span>
          </li>
        </ul>

        <div className={styles.actions}>
          <Button variant={"primary"}>
            <img
              src={Wand}
              alt="Icono de varita mágica como si fuera un lápiz para editar"
            />
            Editar
          </Button>
          <Button variant="delete" onClick={() => deleteReading(reading.id)}>
            <img src={Bin} alt="Eliminar" />
            Eliminar
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ReadingCardHistoryContainer;
