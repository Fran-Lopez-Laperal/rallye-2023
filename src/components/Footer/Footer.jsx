
import escudería from '../../assets/logo-escudería.png'
import federacion from '../../assets/federacion.png'
import aon from '../../assets/footerImages/deporteGalego.png'
import cgr from '../../assets/footerImages/cgr.png'
import deputacion from '../../assets/footerImages/deputacion.png'
import fga from '../../assets/footerImages/FGA.png'
import galicia from '../../assets/footerImages/galicia.png'
import deporGalego from '../../assets/footerImages/RCNS.png'
import xunta from '../../assets/footerImages/xunta.png'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
     
      <div className='copy-logo'>
      <div className="hard-skills">
            <div className='div-container'>
                <div className='tech-container'>
                    <figure className='react-logo'>
                        <img src={federacion} alt="" />
                    </figure>
                    <figure>
                        <img src={aon} alt="" />
                    </figure>
                    <figure>
                        <img src={cgr} alt="" />
                    </figure>
                    <figure id='express'>
                        <img src={deputacion} alt="" />
                    </figure>
                    <figure>
                        <img src={fga} alt="" />
                    </figure>
                    <figure>
                        <img src={galicia} alt="" />
                    </figure>
                    <figure>
                        <img src={deporGalego} alt="" />
                    </figure>
                    <figure>
                        <img src={xunta} alt="" />
                    </figure>
                   
                </div>

            </div>
        </div>
        <section className='footer-imgs'>
          <img className='logo-esc' src={escudería} alt={escudería} />
          <section className='adress'>
            <ul className='footer-adress'>
              <li>FONTOIRA Nº42</li>
              <li>36960</li>
              <li>SANXENXO    PONTEVEDRA</li>
              <li>TLFN.: 671 562 578</li>
            </ul>
          </section>
        </section>
       
      </div>
      <div className='footer-container'>

<div className='media'>
  <a href="mailto:info@rallydepontevedra.es"><i className='fa fa-envelope'></i></a>
  <a href="/contacto"><i className='fa fa-phone'></i></a>
</div>

</div>
      <section className='copy-rally'>
        <strong className='copy'>Rallye de Pontevedra 2024 &copy;</strong>
      </section>
    </footer>
  )
}

export default Footer