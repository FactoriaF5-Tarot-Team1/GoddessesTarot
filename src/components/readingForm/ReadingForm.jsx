import React from "react";
import starIcon from "../../assets/icons/stars.svg";
import tinyStar from "../../assets/icons/tinyStar.svg";
import styles from "./ReadingForm.module.scss";

function ReadingForm() {
  const today = new Date();
  const formattedDay = today.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section aria-labelledby="reading-title" className={styles.formSection}>
      <form className={styles.form}>
        <img src={starIcon} alt="Tres estrellas que evocan el cielo nocturno" />
        <h1>Bienvenida</h1>
        <p>Introduce tu nombre para iniciar la lectura</p>

        <label htmlFor="name">Lectura de:</label>
        <input type="text" id="name" name="name" required minLength={2} />

        <p className={styles.date}>Fecha: {formattedDay}</p>

        <button>Comenzar lectura</button>

        <img src={tinyStar} alt="Pequeña estrella decorativa" />
        <a href="/">Volver al inicio</a>
      </form>
    </section>
  );
}

export default ReadingForm;
