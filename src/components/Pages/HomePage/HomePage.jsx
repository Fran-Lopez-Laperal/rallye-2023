import cartel from '../../../assets/cartel.jpeg'
import './HomePage.css'
import CountDown from '../../CountDown/CountDown'
import noticias from '../../../Noticias/noticias'
import MarqueeImages from '../../../components/MarqueeImages/MarqueeImages'

const HomePage = () => {

console.log(noticias)
  return (
    <div className='home__page'>
      <section>
        <figure className='home__page__figure'>
          <img src={cartel} alt={cartel} />
        </figure>
      </section>
     
      <section>
        <CountDown/>
      </section>

      
      <section>
        <MarqueeImages/>
      </section>

    </div>
  )
}

export default HomePage