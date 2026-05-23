import styles from './SectionReadingHome.module.scss'
import React from 'react'

function SectionReadingHome({icon,alt,title,description}) {
  return (
    <>
    <section className={styles.cardSectionReading}>
        {/* poner icon del componente de lectura */}
        <div className={styles.iconContainer}>
            <img src={icon} alt={alt}></img>
        </div>     
        <h3 className={styles.cardTitleSectionReading}>{title}</h3>
        <hr />
        <p className={styles.cardDescriptionSectionReading}>{description}</p>
    </section>
    </>
  
  )
}

export default SectionReadingHome