import cartel from '../../../assets/cartel.jpeg'
import './HomePage.css'
import CountDown from '../../CountDown/CountDown'
import noticias from '../../../Noticias/noticias'
import MarqueeImages from '../../../components/MarqueeImages/MarqueeImages'
import SectionMenuInfo from '../../SectionMenuInfo/SectionMenuInfo'

const HomePage = () => {

  return (
    <div className='home__page'>
      <section className='home__page__container'>
        <figure className='home__page__figure'>
          <img src={cartel} alt={cartel} />
        </figure>
      </section>

      <section>
        <MarqueeImages />
      </section>

      <section>
        <CountDown />
      </section>
      
      <section>
        <SectionMenuInfo />
      </section>
    </div>
  )
}

export default HomePage