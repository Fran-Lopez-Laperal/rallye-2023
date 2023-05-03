import React from 'react'

import './Documents.css'

const Documents = () => {
  return (
    <section className='documents'>
      <h1>DOCUMENTACIÓN DE INTERÉS</h1>

      <section className='documents__section'>
        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Programa horario</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <p>VER</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Tablón de Anuncios</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i class="fa fa-external-link" aria-hidden="true"></i> <p>ACCEDER</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Cartel Prueba</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Mapa General</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Itinerario</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <p>ABRIR</p></button>
          </footer>
        </article>

        <article className='documents__section__article'>
          <header className='documents__section__article__header'>
            <h2> Guía de Espectador</h2>
          </header>
          <footer className='documents__section__article__footer'>
            <button><i class="fa fa-file-pdf-o" aria-hidden="true"></i><p>ABRIR</p></button>
          </footer>
        </article>

      </section>


    </section>
  )
}

export default Documents