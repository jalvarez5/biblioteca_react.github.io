import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import menu from '../assets/img/menu2.png';
import logo from '../assets/img/logo2.png';
import loan from '../assets/img/loan1.jpg';

function Navbar() {
    return (
        <header>
      <div className="menu container">
        <a><Link to="/"><img src={logo} className="logo" alt="" /></Link></a>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu"><img src={menu} className="menu-icono" alt="menu" /></label>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienessomos">Quienes Somos</Link></li>
            <li><Link to="/prestamo">Prestamo</Link></li>
          </ul>
        </nav>
      </div>

      <div className="header-content container">
        <div className="header-txt">
          <h1 style={{ color: '#272D38' }}><b>¡Únete a nosotros y comienza tu viaje literario hoy mismo!</b></h1>
          <p style={{ color: '#272D38' }}>Haz que la Lectura sea Parte de tu Rutina Diaria con Nuestros Préstamos Digitales</p>
          <div className="botones">
            <a className="btn-1"><li><Link to="/quienessomos"></Link></li></a>
          </div>
        </div>

        <div className="header-img">
          <img src={loan} className="buss" alt="" />
        </div>
      </div>
    </header>
    )

}




export default Navbar;