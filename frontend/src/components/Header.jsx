import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Asegúrate de que este archivo contiene el CSS responsivo

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header id="header" className="header">
      {/* Topbar */}
      <div className="topbar">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope flex items-center">
              <a href="mailto:contacto@deltatecnologias.cl">
                contacto@deltatecnologias.cl
              </a>
            </i>
            <i className="bi bi-phone flex items-center ms-4">
              <span>+569 83185305</span>
            </i>
          </div>
        </div>
      </div>

      {/* Branding y navegación */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link to="/" className="logo d-flex align-items-center me-auto">
            <img
              src="src/assets/img/Logo_delta_nuevo.jpg"
              alt="Delta Tecnologías Logo"
              style={{ maxHeight: "120px", marginRight: "30px" }}
            />
          </Link>

          {/* Ícono de hamburguesa */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMenuOpen ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMenu}
          />

          {/* Menú de navegación */}
          <nav
            id="navmenu"
            className={`navmenu ${isMenuOpen ? "mobile-nav-active" : ""}`}
          >
            <ul>
              <li>
                <Link
                  to="/#hero"
                  className="active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/servicios" onClick={() => setIsMenuOpen(false)}>
                  Servicios
                </Link>
              </li>
               <li>
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botón de contacto (se oculta en mobile por CSS) */}
          {/* <Link to="/contacto" className="cta-btn d-none d-sm-block">
            Contáctanos
          </Link> */}
        </div>
      </div>

      <hr />
    </header>
  );
}
