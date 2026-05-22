import React from 'react'
// import SectionReadingHome from '../../components/sectionReadingHome/SectionReadingHome'

import ArticleReadingCard from '../../components/sectionReadingHome/ArticleReadingCard'
import styles from './Home.module.scss'

function Home() {
  return (
    <>
      <ArticleReadingCard/>
      {/* <SectionReadingHome icon="./src/assets/icons/iconCardPast.svg" title="El Pasado" description="Las constantes que definieron tu trayectoria inicial" />
      <SectionReadingHome icon="./src/assets/icons/iconCardPresent.svg" title="El Presente" description="La variable actual que requiere tu analisis consciente" />
      <SectionReadingHome icon="./src/assets/icons/iconCardFuture.svg" title="El Futuro" description="El vector resultante de tus decisiones presentes" /> */}
    </>
  )
}

export default Home