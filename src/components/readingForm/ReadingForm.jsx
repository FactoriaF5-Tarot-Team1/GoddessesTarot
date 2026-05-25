import React from "react";
import starIcon from "../../assets/icons/stars.svg";
import tinyStar from "../../assets/icons/tiny-star.svg";
import styles from "./ReadingForm.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ReadingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const today = new Date();
  const formattedDay = today.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section aria-labelledby="reading-title" className={styles.formSection}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
            placeholder="Tu nombre"
            className={styles.input}
            autoComplete="off"
            {...register("name", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos dos caracteres",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <p className={styles.date}>
          Fecha: <span className={styles.dateValue}>{formattedDay}</span>
        </p>

        <button type="submit">Comenzar lectura</button>

        <div className={styles.divider}>
          <img
            src={tinyStar}
            alt="Pequeña estrella decorativa"
            className={styles.decorative}
          />
        </div>

        <Link to="/">Volver al inicio</Link>
      </form>
    </section>
  );
}

export default ReadingForm;
