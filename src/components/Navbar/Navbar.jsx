import { Link } from 'react-router-dom'

import './Navbar.css'
import placa from '../../assets/placa.png'

const NavBar = () => {

    return (
        <div className='navbar'>
            <div className='navbar__menu'>
                <ul className='navbar__menu__ul'>

                    <Link to={"/"}>
                        <li>
                            <img className='nav_img' src={placa} alt="" />
                        </li>
                    </Link>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <li>
                            <p style={{ backgroundColor: 'none' }}>INICIO</p>
                        </li>
                    </Link>

                    <Link to={'/noticias'} style={{ textDecoration: 'none' }}>
                        <li>
                            <p>NOTICIAS</p>
                        </li>
                    </Link>

                    <Link to={'/tablon'} style={{ textDecoration: 'none' }}>
                        <li>
                            <p>COMPETIDORES</p>
                        </li>
                    </Link>
                    <Link to={'/espectadores'} style={{ textDecoration: 'none' }}>
                        <li>
                            <p>ESPECTADORES</p>
                        </li>
                    </Link>
                    <Link  to={'https://www.atodomotor.com/online/2023/pontevedra'} style={{ textDecoration: 'none' }}>
                        <li>
                            <p>TIEMPOS ONLINE</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar