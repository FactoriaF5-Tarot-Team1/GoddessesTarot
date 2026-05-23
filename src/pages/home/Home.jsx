import React, { useState } from 'react'
import SectionReadingHome from '../../components/sectionReadingHome/SectionReadingHome'

import styles from './Home.module.scss'

import { arraySectionReadingHome } from '../../assets/data/dataGoodessTarot'; 
function Home() {
  // Guardamos el array en el estado de React
  const [listSections, setListSections] = useState(arraySectionReadingHome);

  return (
    <>
      <section className={styles.SectionReading}>
        <h2 className={styles.TitleSectionReading}>Tirada de 3 Cartas</h2>
        <p className={styles.ParagrahSectionReading}>TU PASADO, PRESENTE Y FUTURO</p>

        {listSections.map((section,index) =>(
          <SectionReadingHome icon={section.icon} alt={section.alt} title={section.title} description={section.description} isActive={section.isActive} />
        ))
        }
      </section>
    </>
  )
}

export default Home