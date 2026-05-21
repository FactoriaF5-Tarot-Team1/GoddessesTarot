import styles from './Footer.module.scss';
import Img from '../../assets/icons/instagram_icon.svg';



const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.footerContainer}>
                <p className={styles.logoText}>GODDESSES TAROT</p>
                <p className={styles.footerText}>© 2026. Designed with 💜 by Team 1</p>
            <div className={styles.iconContainer}>
                <img src={Img} alt="An icon that represents the Instagram app"></img>
            </div>
        </div>
    </footer>
};

export default Footer
