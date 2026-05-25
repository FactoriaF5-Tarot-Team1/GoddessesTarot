import styles from './SectionReadingHome.module.scss'
import React from 'react'

function SectionReadingHome({icon,alt,title,description,isActive,onHover}) {
  return (
    <>
    <section 
    // Al entrar el ratón, avisamos al padre para que actualice el activeId
      onMouseEnter={onHover}
      className={`${styles.cardSectionReading} ${isActive ? styles.active : ''}`}
    >

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