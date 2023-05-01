
import escudería from '../../assets/logo-escudería.png'
import federacion from '../../assets/federacion.png'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container d-flex flex-wrap justify-content-center'>

        <div className='media  d-flex text-align-center justify-content-evenly mb-5 mt-2'>
          <a href="https://www.facebook.com/RallyePontevedra"><i className='fa fa-facebook'></i></a>
          <a href="https://www.instagram.com/rallypontevedra"><i className='fa fa-instagram'></i></a>
          <a href="mailto:info@rallydepontevedra.es"><i className='fa fa-envelope'></i></a>
          <a href="/contacto"><i className='fa fa-phone'></i></a>
        </div>

      </div>
      <div className='copy-logo'>
        <strong className='copy mt-5'>Rally de Pontevedra 2023 &copy;</strong>
        <section className='footer-imgs'>
          <img className='logo-esc' src={escudería} alt={escudería} />
          <img className='logo-esc' src={federacion} alt={federacion} />
        </section>

        <div>
          <ul className='footer-adress'>
            <li>FONTOIRA Nº42</li>
            <li>36960</li>
            <li>SANXENXO    PONTEVEDRA</li>
            <li>TLFN.: 671 562 578</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer