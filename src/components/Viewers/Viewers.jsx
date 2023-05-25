import React from 'react'
import mapa from '../../assets/mapageneral.png'
import mapaPdf from '../../assets/Documents/mapa general.pdf'
import lista from '../../assets/Documents/1_INSCRITOS-PONTEVEDRA.pdf'

import './Viewers.css'

const Viewers = () => {
    return (
        <section className='viewers'>
            <section className='viewers__section'>
                <header className='viewers__title'>
                    <h1>GUÍA DEL ESPECTADOR</h1>
                </header>

                <article>
                    <h2>Lista de inscritos</h2>
                    <section className='viewers__section__header__section'>
                            <p>Descarga la lista de inscritos</p>
                            <a href={lista}>Descargar</a>
                        </section>
                </article>

                <article className='viewers__section__maps'>
                    <h2>Mapa General de Tramos</h2>
                    <header className='viewers__section__header'>
                        

                        <section className='viewers__section__header__section'>
                            <p>Tramos en Google Maps</p>
                            <a href={'https://www.google.com/maps/d/viewer?mid=1w-U79p3ABYB-TjF1lFvTBU9Of0T_2tE&usp=sharing'}>VER</a>
                        </section>
                    </header>
                    <section className='viewers__section__maps__img'>
                        <img src={mapa} alt={mapa} />
                    </section>
                </article>

               
            </section>





        </section>
    )
}

export default Viewers