import React, { useEffect, useState } from 'react'
import "./NavbarMovil.css"
import placa from '../../assets/placa.png'
import { Link } from 'react-router-dom'

const NavbarMovil = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [transparent, setTransparent] = useState('0.319')
    const [isnavScroll, setIsnavScroll] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          if (position > 200) { 
            setIsnavScroll(transparent); 
          } else {
            setIsnavScroll(!transparent);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <button className="nav__button__div" onClick={handleShowMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            {showMenu ? <nav className={"navMovil__open"}>
                <ul className='navbarMovil__menu__ul'>
                    <li>
                        <Link to={"/"} style={{textAlign:'center'}}>
                            <img className='nav_img' src={placa} alt="" />
                        </Link>
                    </li>

                    <li>
                        <Link onClick={handleShowMenu} to={'/noticias'}> NOTICIAS</Link>
                    </li>
                    <li>
                        <Link onClick={handleShowMenu} to={''}>COMPETIDORES</Link>
                    </li>
                    <li>
                        <Link onClick={handleShowMenu} to={''}>ESPECTADORES</Link>
                    </li>
                    <li>
                        <Link onClick={handleShowMenu} to={''}>TIEMPOS ONLINE</Link>
                    </li>
                </ul>
            </nav>
                :
                  <nav className={`${!transparent} navMovil__close ${isnavScroll ? 'navScroll' : 'navMovil__close'}`}>
                    {/* <Link to={"/"}>
                        <img className='nav_img' src={placa} alt="" />
                    </Link> */}
                </nav>}
        </>
    )
}

export default NavbarMovil