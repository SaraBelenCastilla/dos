
import logo from '../assets/img/logoVertical.png'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";
import logoFijo from '../assets/img/logoFijo.png'
import '../css/header.css'



function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  
  return (
    <>
    <header className="header">
      <img src={logoFijo} alt="logo" className="logo__fijo" />
      <div className="header__container">
        {/* <img className='logo' src={logo} alt="logo" /> */}
        <button className={`header__boton ${menu ? 'isActive' : ''}`}
  onClick={toggleMenu}> 
          {menu ?<IoMdCloseCircleOutline  className='menu__icon'/> : <CgMenuRound className='menu__icon' />}
        </button>
      </div>
      <nav className={`header__menu ${menu ? 'isActive' : ''}`}>
        <div className="header__cabecera">
          <img className='logo' src={logo} alt="logo" /> 
          <button className='header__boton' onClick={toggleMenu}>
            <IoClose className="menu__close" />
          </button>
        </div>
        <ul className='header__tamano'>
            {menu && ( // Solo renderiza los enlaces si el menú está activo
              <>

               {/* <li className='enlaces3'><Link className="header__linkLista" to={'/'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>Index</Link></li> */}
               
    <li className='enlaces3'><Link className="header__linkLista" to={'/'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>ABSOLUTO</Link></li>
     <li className='enlaces4'><Link className="header__linkLista" to={'/somos'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>SOMOS </Link></li>
                <li className='enlaces5'><Link className="header__linkLista" to={'/hacemos'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>HACEMOS</Link></li>
                
                <li className='enlaces1'><Link className="header__linkLista" to={'/porfolio'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>CASOS </Link></li>
                 <li className='enlaces6'><Link className="header__linkLista" to={'/Insights'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>INSIGHTS</Link></li>

     {/* <li className='enlaces1'><Link className="header__linkLista" to={'/origen'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>EL ORIGEN</Link></li>
                <li className='enlaces6'><Link className="header__linkLista" to={'/insights'} onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>INSIGHTS</Link></li> */}
                <li className='enlaces7'><Link className="header__linkLista" to={'/contacto'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>¿HABLAMOS?</Link></li>
     {/* <li className='enlaces7'><Link className="header__linkLista" to={'/home'}  onClick={() => {
      closeMenu(); // Cierra el menú
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza al inicio
    }}>Home</Link></li> */}
              </>
            )}
          </ul>
      </nav>
    </header>
   
  </>
  )
}

export default Header