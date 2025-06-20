import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navmenu" className="navmenu"> {/* Clases del HTML original */}
      <ul>
        {/* Usamos Link de react-router-dom para la navegación */}
        <li><Link to="/#hero" className="active">Inicio<br/></Link></li>
        <li><Link to="/#about">Acerca de</Link></li>
        <li><Link to="/#services">Servicios</Link></li>
        <li><Link to="/#contact">Contacto</Link></li>
      </ul>
      {/* El icono para el menú móvil se suele manejar con JavaScript para mostrar/ocultar el navmenu */}
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}