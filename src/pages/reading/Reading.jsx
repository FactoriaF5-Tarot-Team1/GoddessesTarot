import React from "react";
import styles from "./Reading.module.scss";
import line from "../../assets/icons/line.svg";

function Reading() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default Reading;
