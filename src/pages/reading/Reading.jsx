import React from "react";
import styles from "./Reading.module.scss";
import line from "../../assets/icons/line.svg";
import Fan from "../../components/fan/Fan";
import TurnIndicator from "../../components/turn-indicator/TurnIndicator";
import CardSlot from "../../components/card-slot/CardSlot";
import useFanCards from "../../hooks/useFanCards";
import prueba from "../../hooks/useFanCards";
import btnBarajar from "../../assets/icons/btn-shuffle.svg";
import btnGuardar from "../../assets/icons/btn-save.svg";
import Button from "../../components/button/Button";

function Reading() {
  const { shuffledIds, selectCard, selectedCards, currentTurn, openModal } =
    useFanCards();

  const handleClick = () => {
    window.location.reload(); // Recarga la página para barajar de nuevo
  
  }
  
  return (
    <>
      <section className={styles.readingHero}>
        <div className={styles.textLines}>
          <img src={line} alt="linea" />
          <p>CONEXIÓN CUANTICA</p>
          <img src={line} alt="linea" />
        </div>
        <div className={styles.heroContent}>
          <h1>Elige tus cartas</h1>
          <p>
            Permite que la sincronicidad entre los algoritmos del cosmos y tu
            intuición guien esta tirada.
          </p>
        </div>
      </section>

      <section className={styles.readingFan}>
        <Fan
          shuffledIds={shuffledIds}
          selectCard={selectCard}
          selectedCards={selectedCards}
        ></Fan>
        <TurnIndicator currentTurn={currentTurn} />
      </section>

      <section className={styles.slotsContainer}>
        <CardSlot turn="pasado" card={selectedCards[0]} openModal={openModal} />
        <CardSlot
          turn="presente"
          card={selectedCards[1]}
          openModal={openModal}
        />
        <CardSlot turn="futuro" card={selectedCards[2]} openModal={openModal} />
      </section>

      <section className={styles.sectionButons}>
        <Button variant={"primary"} size={"size"} onClick={handleClick}>
            <img src={btnBarajar} alt="icono de barajar de nuevo" /> Barajar de nuevo
        </Button>
        <Button variant={"secondary"} size={"size"}> 
            <img src={btnGuardar} alt="icono de guardar tirada" /> Guardar tirada
        </Button>
      </section>
    </>
  );
}

export default Reading;
