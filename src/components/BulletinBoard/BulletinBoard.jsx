import React from 'react'

import './BulletinBoard.css'

import noticiasTablon from '../../Data/noticiasTablon'

const BulletinBoard = () => {

  console.log(noticiasTablon)

  return (
    <>
      <section className='bulletinBoard'>
        <section className='bulletinBoard__container'>
          <header className='bulletinBoard__container--header'>
            <h1 className='bulletinBoard__title'>Tablón de anuncios</h1>
          </header>
          {noticiasTablon.map(({ title, date, id, img }) => (
            <section key={id} className='bulletinBoard__card'>
              <h3 className='bulletinBoard__card--h3'>{title}</h3>
              <section className='bullentinBoard__card__section'>
                <p>{date}</p>
                <a href={img}>VER</a>
              </section>
            </section>
          ))}
        </section>

      </section>
    </>
  )
}

export default BulletinBoard