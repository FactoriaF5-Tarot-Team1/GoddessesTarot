import React from "react";
import starIcon from "../../assets/icons/stars.svg";
import tinyStar from "../../assets/icons/tiny-star.svg";
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
        <div className={styles.starWrapper}>
          <img
            src={starIcon}
            alt="Tres estrellas que evocan el cielo nocturno"
            className={styles.starIcon}
          />
        </div>

        <h1 id="reading-title" className={styles.title}>
          Bienvenida
        </h1>

        <p>Introduce tu nombre para iniciar la lectura</p>

        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>
            Lectura de:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
            minLength={2}
            className={styles.input}
          />
        </div>

        <p className={styles.date}>
          Fecha: <span className={styles.dateValue}>{formattedDay}</span>
        </p>

        <button>Comenzar lectura</button>

        <div className={styles.divider}>
          <img
            src={tinyStar}
            alt="Pequeña estrella decorativa"
            className={styles.decorative}
          />
        </div>

        <a href="/">Volver al inicio</a>
      </form>
    </section>
  );
}

export default ReadingForm;
