import React from "react";
import styles from "./Hero.module.scss";
import heroBg from "../../assets/images/hero-bg.png";
import line from "../../assets/icons/line.svg";
import Button from "../button/Button";
import btnStar from "../../assets/icons/btn-stars.svg";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/reading-name");
  }

  return (
    <>
      <div className={styles.textLines}>
        <img src={line} alt="linea" />
        <p>CONECTA CON TU LUZ</p>
        <img src={line} alt="linea" />
      </div>
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src={heroBg}
          alt="imagen de fondo de una mujer con cartas"
        />
        <div className={styles.heroContent}>
          <h1>El Tarot de las Diosas</h1>
          <p>
            Descubre tu diosa interior a través de la sabiduría STEM. Una
            convergencia mística entre los algoritmos del destino y la intuición
            ancestral.
          </p>
          <Button variant={"primary"} handleClick={handleClick}>
            <img src={btnStar} alt="icono de estrellas" />
            EMPEZAR LECTURA
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
