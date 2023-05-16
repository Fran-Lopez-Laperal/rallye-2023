import cartel from '../../../assets/cartel.jpeg'
import './HomePage.css'
import CountDown from '../../CountDown/CountDown'
import MarqueeImages from '../../../components/MarqueeImages/MarqueeImages'
import SectionMenuInfo from '../../SectionMenuInfo/SectionMenuInfo'
import Documents from '../../Documents/Documents'
import instagram from '../../../assets/instagram-icon.png'
import facebook from '../../../assets/facebook.png'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <div className='home__page'>
      <section className='home__page__container'>
        <figure className='home__page__figure'>
          <img src={cartel} alt={cartel} />
        </figure>
      </section>

      <section className='marquee__homePage'>
        <MarqueeImages />
      </section>

      <section className='links__media'>
        <article className='media__icons'>
          <section className='facebook'>
          <p>Facebook</p>
            <Link to={"https://www.facebook.com/RallyePontevedra"}>
           
              <img src={facebook} alt="" />
            </Link>
          </section>

          <section className='instagram'>
          <p>Instagram</p>
            <Link to={"https://www.instagram.com/rallyepontevedra"}>
           
              <img src={instagram} alt="" />
            </Link>
          </section>
        </article>


      </section>

      <section>
        <CountDown />
      </section>

      <section>
        <SectionMenuInfo />
        <Documents />
      </section>

      <section>

      </section>
    </div>
  )
}

export default HomePage