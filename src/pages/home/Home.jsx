import React, { useState } from 'react'
import SectionReadingHome from '../../components/section-reading-home/SectionReadingHome'

import styles from './Home.module.scss'

import { arraySectionReadingHome } from '../../assets/data/dataGoodessTarot'; 

function Home() {
  
  const [listSections, setListSections] = useState(arraySectionReadingHome);

  const [activeId, setActiveId] = useState(2);

  return (
    <>
      <section className={styles.sectionReading}>
        <h2>Tirada de 3 Cartas</h2>
        <p className={styles.paragrahSectionReading}>TU PASADO, PRESENTE Y FUTURO</p>
        <div className={styles.cardsContainer} onMouseLeave={() => setActiveId(2)}>
        {listSections.map((section,index) =>(
          <SectionReadingHome 
            key={section.id} 
            icon={section.icon} 
            alt={section.alt} 
            title={section.title} 
            description={section.description} 
            isActive={activeId === section.id} 
            // Pasamos la función para cambiar el ID activo al hacer hover
              onHover={() => setActiveId(section.id)}
            />
        )) 
        }
        </div>
      </section>
    </>
  )
}

export default Home