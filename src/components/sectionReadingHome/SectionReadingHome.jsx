import styles from './SectionReadingHome.module.scss'
import React from 'react'

function SectionReadingHome({icon,title,description}) {
  return (
    <>
    <section className={styles.cardSectionReading}>
        {/* poner icon del componente de lectura */}
        <div className={styles.iconContainer}>
            <img src={icon} alt="Icono de carta del pasado con un reloj"></img>
        </div>     
        <h2 className={styles.cardTitleSectionReading}>{title}</h2>
        <hr />
        <p className={styles.cardDescriptionSectionReading}>{description}</p>
    </section>
    </>
  
  )
}

export default SectionReadingHome