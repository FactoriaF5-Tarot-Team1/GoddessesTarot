import styles from './SectionReadingHome.module.scss'
import React from 'react'
import SectionReadingHome from '../../components/sectionReadingHome/SectionReadingHome'

function ArticleReadingCard() {
  return (
     <>
    <article className={styles.ArticleReading}>
        <h1 className={styles.TitleSectionReading}>Tirada de 3 Cartas</h1>
        <p>TU PASADO, PRESENTE Y FUTURO</p>
        <SectionReadingHome icon="./src/assets/icons/iconCardPast.svg" title="El Pasado" description="Las constantes que definieron tu trayectoria inicial" />
        <SectionReadingHome icon="./src/assets/icons/iconCardPresent.svg" title="El Presente" description="La variable actual que requiere tu analisis consciente" />
        <SectionReadingHome icon="./src/assets/icons/iconCardFuture.svg" title="El Futuro" description="El vector resultante de tus decisiones presentes" />
    </article>
    </>
    
  )
}

export default ArticleReadingCard