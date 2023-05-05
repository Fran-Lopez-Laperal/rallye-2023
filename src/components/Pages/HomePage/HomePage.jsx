import cartel from '../../../assets/cartel.jpeg'
import './HomePage.css'
import CountDown from '../../CountDown/CountDown'
import MarqueeImages from '../../../components/MarqueeImages/MarqueeImages'
import SectionMenuInfo from '../../SectionMenuInfo/SectionMenuInfo'
import Documents from '../../Documents/Documents'

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