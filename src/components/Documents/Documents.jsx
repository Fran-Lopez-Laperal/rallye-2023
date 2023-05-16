import React, { useState } from 'react'

import './Documents.css'
import FileDocuments from '../FileDocuments/FileDocuments'

import programa from '../../assets/Documents/Programa Horario.pdf'
import cartel from '../../assets/Documents/Cartel.pdf'
import { Link } from 'react-router-dom'


const Documents = () => {
  const [isActivateBackground, setIsActivateBackground] = useState(false)

  const handlClosePDF = () => {
    setIsActivateBackground(!isActivateBackground)
  }

  const handleShowPDF = () => {
    setIsActivateBackground(true)
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
            <a href={programa} id="button__documents">
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
              <p>VER</p>
            </a>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Tablón de Anuncios</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <Link to={'/tablon'} id="button__documents" > <i className="fa fa-external-link" aria-hidden="true"></i> <p>ACCEDER</p></Link>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Cartel Prueba</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <a href={cartel} id="button__documents" > <i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>VER</p></a>
          </footer>
        </article>

        {/* <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Cartel Prueba</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button id="button__documents" onClick={handleShowPDF}> <i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
            {isActivateBackground ?
              <section className='section__file__documents'>
                <button id="button__documents__close" onClick={handlClosePDF}>
                  <i className="fa fa-times" aria-hidden="true">

                  </i>
                </button>
                <FileDocuments file={cartel} />
              </section>
              :
              " "
            }
          </footer>
        </article> */}

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Mapa General</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <a id="button__documents" > <i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>VER</p></a>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Itinerario</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <a id="button__documents" > <i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></a>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Guía de Espectador</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <a id="button__documents" > <i className="fa fa-file-pdf-o" aria-hidden="true"></i><p>ABRIR</p></a>
          </footer>
        </article>

      </section>


    </section>
  )
}

export default Documents