import styles from "./WomenSection.module.scss";
import womenSectionImg from "../../assets/images/ada-lovelace-img.svg";
import flaskIcon from "../../assets/images/flask-icon.svg";

function WomenSection() {
  return (
    <section>
      <div className={styles.tarotDeckContent}>
        <div className={styles.stemTarotDivider}>
          <img src={flaskIcon} alt="Icono de una ampolla de laboratorio"></img>
          <p>EL TAROT STEM</p>
        </div>
        <div className={styles.tarotDeckDescription}>
          <h2>Las mujeres que lo representan</h2>
          <p>
            Cada arcano en nuestro mazo ha sido reimaginado a través de las
            mentes brillantes que forjaron la ciencia y la tecnología. Desde las
            astrónomas que cartografiaron el infinito hasta las matemáticas que
            descifraron el lenguaje de la creación.
          </p>
        </div>
      </div>
      <div className={styles.adaLovelaceContainer}>
      <img
        className={styles.adaLovelaceImage}
        src={womenSectionImg}
        alt="Imágen de una mujer con un abanico de cartas en la mano"
      ></img>
      <div className={styles.cardOverlayText}>
        <h3>Ada Lovelace</h3>
        <p>La Suma Sacerdotisa del Código</p>
      </div>
      </div>
    </section>
  );
}

export default WomenSection;
