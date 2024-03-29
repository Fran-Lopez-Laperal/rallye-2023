import React from 'react'
import './News.css'

import noticias from '../../Data/noticias'
import { Link } from 'react-router-dom'

const News = () => {

    console.log(noticias)


    return (
        <section className='news'>
            <section className='news__card__container'>
                {noticias
                .sort((a,b) => b.id - a.id)
                .map(({ title, img, id }) => (

                    <Link className='news__card__link' style={{ textDecoration: 'none' }} key={id} to={`/noticias/${id}`}>
                        <article

                            className='news__card'
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',

                            }}
                        >
                            <footer className='news__card__footer'>
                                <h1>{title}</h1>
                                
                            </footer>

                        </article>
                    </Link>
                ))}
            </section>

        </section>
    )
}

export default News