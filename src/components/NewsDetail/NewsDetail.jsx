import React from 'react'
import { useParams } from 'react-router-dom'


import './NewsDetail.css'

import noticias from '../../Data/noticias'
console.log(noticias)

const NewsDetail = () => {
    const { id } = useParams()
    console.log(id)
    const itemNew = noticias.find((item) => item.id === id);

    console.log(itemNew)


    return (
        <article className='newsDetail'>
            <section className='newsDetail__container'>
                <img className='newsDetail__container--img' src={itemNew.img} alt={itemNew.title} />
                <footer className='newsDetail__container--footer'>
                    <p>{itemNew.description1}</p>
                    <p>{itemNew.description2}</p>
                    <p>{itemNew.description3}</p>
                </footer>

            </section>

        </article>
    )
}

export default NewsDetail