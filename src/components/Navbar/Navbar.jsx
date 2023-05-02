import { Link } from 'react-router-dom'

import './Navbar.css'
import placa from '../../assets/placa.png'

const NavBar = () => {

    return (
        <div className='navbar'>
            <div className='navbar__menu'>
                <ul className='navbar__menu__ul'>
                    <li>
                        <Link to={"/"}>
                            <img className='nav_img' src={placa} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/noticias'}> NOTICIAS</Link>
                    </li>
                    <li>
                        <Link to={'/'}>COMPETIDORES</Link>
                    </li>
                    <li>
                        <Link to={'/'}>ESPECTADORES</Link>
                    </li>
                    <li>
                        <Link to={'/'}>TIEMPOS ONLINE</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar