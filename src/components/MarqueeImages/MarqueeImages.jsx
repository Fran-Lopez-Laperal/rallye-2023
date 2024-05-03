import attis from '../../assets/marqueeImages/attis.png'
import bamarti from '../../assets/marqueeImages/bamarti.png'
import caetano from '../../assets/marqueeImages/caetano.png'
import aquapark from '../../assets/marqueeImages/Aquapark.png'
import exnor from '../../assets/marqueeImages/exnor.png'
import furgo from '../../assets/marqueeImages/furgo.png'
import castro from '../../assets/marqueeImages/castro.png'
import king from '../../assets/marqueeImages/king.png'
import polymade from '../../assets/marqueeImages/polymade.png'
import progreso from '../../assets/marqueeImages/progreso.png'
import repsol from '../../assets/marqueeImages/repsol.png'
import staroil from '../../assets/marqueeImages/staroil.png'
import mcdonalds from '../../assets/marqueeImages/macdonalds.png'
import newBikes from '../../assets/marqueeImages/newBikes.png'
import './MarqueeImages.css';
import Marquee from 'react-fast-marquee';

function MarqueeImages() {
    return (
        <div className="galeria">
            <Marquee pauseOnHover={true} gradientWidth={5} speed={40} >
                <section className='nav-section'>
                    <ul className='nav-list d-flex flex-wrap justify-content-between'>
                        <a target='_blank' rel="noreferrer" href='https://attisbyv.es/' className='image-wrapper'>
                            <img src={attis} alt={attis} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://www.caetanoformulagalicia.es/' className='image-wrapper'>
                            <img src={caetano} alt={caetano} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://aquaparksanxenxo.com/' className='image-wrapper'>
                            <img src={aquapark} alt={aquapark} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://estaciondeservicioexnor.negocio.site/' className='image-wrapper'>
                            <img src={exnor} alt={exnor} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://estaciondeservicioexnor.negocio.site/' className='image-wrapper'>
                            <img src={repsol} alt={repsol} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://estaciondeservicioexnor.negocio.site/' className='image-wrapper'>
                            <img src={mcdonalds} alt={mcdonalds} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://estaciondeservicioexnor.negocio.site/' className='image-wrapper'>
                            <img src={king} alt={king} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://adfurgo.com/' className='image-wrapper me-4'>
                            <img src={furgo} alt={furgo} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://talleresocastro.es/' className='image-wrapper me-4'>
                            <img id='castro' src={castro} alt={castro} />
                        </a>
                        <a target='_blank' id='polymade' rel="noreferrer" href='https://astillerospolymade.com/' className='image-wrapper me-4'>
                            <img src={polymade} alt={polymade} />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.autia.es/taller/Pontevedra/Sanxenxo/garaje-progreso' className='image-wrapper me-4'>
                            <img src={progreso} alt={progreso} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='http://www.inmobiliariabamarti.com/' className='image-wrapper'>
                            <img src={bamarti} alt={bamarti} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://www.staroil.es/' className='image-wrapper me-4'>
                            <img src={staroil} alt={staroil} />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://newbikes.es/' className='image-wrapper me-4'>
                            <img src={newBikes} alt={newBikes} />
                        </a>

                    </ul>
                </section>
            </Marquee>
        </div>
    );
}

export default MarqueeImages;