import React from 'react'

import './SectionMenuInfo.css'

const SectionMenuInfo = () => {
    return (

        <section className='sectionMenuInfo'>

            <article id='img__noticias' className='sectionMenuInfo__article' >
                <section className='sectionMenuInfo__article__section'>
                    <footer className='sectionMenuInfo__article__footer'>
                        <p className='secondary__title__card'>Todas las noticias de la prueba</p>
                        <p className='title__card'>NOTICIAS</p>
                    </footer>
                </section>

            </article>

            <article id='img__tiempos' className='sectionMenuInfo__article' >
                <section className='sectionMenuInfo__article__section'>
                    <footer className='sectionMenuInfo__article__footer'>
                        <p className='secondary__title__card'>Tiempos en directo</p>
                        <p className='title__card'>TIEMPOS ONLINE</p>
                    </footer>
                </section>
            </article>

            <article id='img__mapas' className='sectionMenuInfo__article' >
                <section className='sectionMenuInfo__article__section'>
                    <footer className='sectionMenuInfo__article__footer'>
                        <p className='secondary__title__card'>Mapas y tramos para espectadores</p>
                        <p className='title__card'>MAPAS Y TRAMOS</p>
                    </footer>
                </section>
            </article>

            <article id='img__info' className='sectionMenuInfo__article' >
                <section className='sectionMenuInfo__article__section'>
                    <footer className='sectionMenuInfo__article__footer'>
                        <p className='secondary__title__card'>Informacion general de la prueba</p>
                        <p className='title__card'>INFO GENERAL</p>
                    </footer>
                </section>
            </article>

            {/* <article id='img__espectadores' className='sectionMenuInfo__article' >
                <section className='sectionMenuInfo__article__section'>
                <footer className='sectionMenuInfo__article__footer'>
                    <p cla className='secondary__title__card'ssName='title__card'>PONTEVEDEVEDRA</p>
                    </footer>
                </section>
            </article> */}

        </section>

    )
}

export default SectionMenuInfo