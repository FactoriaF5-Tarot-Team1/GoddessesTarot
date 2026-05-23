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
          <SectionReadingHome icon={section.icon} alt={section.alt} title={section.title} description={section.description} />
        ))
        }
        {/* <SectionReadingHome icon="./src/assets/icons/past2.svg" alt="Icono de carta del pasado con un reloj" title="El Pasado" description="Las constantes que definieron tu trayectoria inicial" />
        <SectionReadingHome icon="./src/assets/icons/present2.svg" alt="Icono de carta del presente con una diana"title="El Presente" description="La variable actual que requiere tu analisis consciente" />
        <SectionReadingHome icon="./src/assets/icons/future2.svg" alt="Icono de carta del futuro con 3 estrellas de 4 puntas y un rayo magico" title="El Futuro" description="El vector resultante de tus decisiones presentes" /> */}
      </section>
    </>
  )
}

export default Home