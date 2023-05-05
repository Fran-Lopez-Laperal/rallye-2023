import React, { useState } from 'react'

import './Documents.css'


const Documents = () => {
  const [showPDF, setShowPDF] = useState(false)


  const handleShowPDF = () => {
    setShowPDF(!showPDF)
  }


  return (
    <section className='documents'>
      <h1>DOCUMENTACIÓN DE INTERÉS</h1>

      <section className='documents__section'>
        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Programa horario</h2>
          </header>
          <footer className='documents__section__article__footer'>

            <button onClick={handleShowPDF}><i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>VER</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Tablón de Anuncios</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i className="fa fa-external-link" aria-hidden="true"></i> <p>ACCEDER</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Cartel Prueba</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Mapa General</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Itinerario</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Guía de Espectador</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i className="fa fa-file-pdf-o" aria-hidden="true"></i><p>ABRIR</p></button>
          </footer>
        </article>

      </section>


    </section>
  )
}

export default Documents