// src/components/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado si usas <Link>

export default function CallToAction() {
  return (
    <div className="call-to-action">
      <h2 className="display-5 fw-bold mb-4 text-white">¿Listo para un Futuro Más Inteligente y Seguro?</h2>
      <p className="lead mb-5 text-white-75">
        Contáctanos hoy mismo para una consulta personalizada y descubre cómo Delta Tecnologías puede transformar tus espacios con soluciones eléctricas y tecnológicas de vanguardia.
      </p>
      <Link to="/contacto" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold animate-on-hover-btn">
        Contáctanos Ahora
      </Link>
    </div>
  );
}