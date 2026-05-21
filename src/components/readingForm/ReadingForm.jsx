import React from 'react'
import starIcon from '../../assets/icons/stars.svg'

function ReadingForm() {
    const today = new Date();
    const formattedDay = today.toLocaleDateString("es-Es",)

  return (
    <section>
        <img src={starIcon} alt="" />
        <h1>Bienvenida</h1>
        <p>Introduce tu nombre para iniciar la lectura</p>

        <div>
            <label htmlFor="name">Lectura de:</label>
            <input type="text" id='name' />
        </div>

        <div>

        </div>
    </section>
  )
}

export default ReadingForm