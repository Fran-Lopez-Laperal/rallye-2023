import React from 'react'
import { useParams } from 'react-router-dom'


import './NewsDetail.css'

import noticias from '../../Noticias/noticias'
console.log(noticias)

const NewsDetail = () => {
    const { id } = useParams()
    console.log(id)
    const itemNew = noticias.find((item) => item.id === id);

    console.log(itemNew)


    return (
        <article className='newsDetail'>
            <section className='newsDetail__container'>
                <img src={itemNew.img} alt={itemNew.title} />
                <h1>{itemNew.title}</h1>
                <p>{itemNew.description}</p>
            </section>

        </article>
    )
}

export default NewsDetail