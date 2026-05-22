import styles from "./Footer.module.scss";
import Img from "../../assets/icons/instagram-icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.logoText}>GODDESSES TAROT</p>
        <p className={styles.footerText}>© 2026. Designed with 💜 by Team 1</p>
      </div>
      <div className={styles.iconContainer}>
        <img src={Img} alt="Icono que representa la app de Instagram"></img>
      </div>
    </footer>
  );
};

export default Footer;
