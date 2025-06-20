// src/components/Footer.jsx (o Footer.js)
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link si vas a usarlo para navegación interna
import  '../index.css'


export default function Footer() {
  return (
    
    <footer id="footer" className="footer" style={{ backgroundColor: '#1FEE9E',padding: '4rem 2rem' }}>
      <hr clssname="footerl"></hr>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-12 footer-info">
            {/* Si el logo en el footer es el mismo que el del Header, puedes usarlo aquí también */}
            {/* Si es el mismo logo que el del header y ya lo tienes importado en App.jsx */}
            {/* <Link to="/" className="logo d-flex align-items-center">
              <img src="/assets/img/Logo_delta_nuevo.jpg" alt="Delta Tecnologías Logo" style={{ maxHeight: '30px' }} />
              <span>Delta Tecnologías</span>
            </Link> */}
            {/* Si no necesitas el logo con imagen en el footer, puedes dejar solo el texto como estaba en el HTML */}
            <Link to="/" className="logo d-flex align-items-center">
              <span>Delta Tecnologías</span>
            </Link>
            <p>Soluciones integrales en electricidad y seguridad.</p>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-5 footer-links">
            <h4>Enlaces Útiles</h4>
            <ul>
              {/* Es mejor usar Link para navegación interna en React */}
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/sobre-nosotros">Acerca de</Link></li> {/* Asumiendo esta ruta */}
              <li><Link to="/servicios">Servicios</Link></li>     {/* Asumiendo esta ruta */}
             {/* <li><a href="#">Términos de Servicio</a></li>
              <li><a href="#">Política de Privacidad</a></li>*/}
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li><a href="#">Instalaciones Eléctricas</a></li>
              <li><a href="#">Mantenciones Eléctricas</a></li>
              <li><a href="#">Sistemas de Seguridad</a></li>
              <li><a href="#">Paneles Solares</a></li>
              <li><a href="#">Domótica</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
            <h4>Contáctanos</h4>
            <p>
            Nos puede contactar a via telefonica a los siguiente numeros:
              <br />
              <strong>Teléfono:</strong> +569 83185305<br />         
             <strong>Nuestros Correos:</strong> <br />
              <p>
              <strong>Correo Electrónico:</strong>contacto@deltatecnologias.cl<br />
              <strong>Correo Electrónico:</strong>ventas@deltatecnologias.cl<br />
              <strong>Correo Electrónico:</strong>clientes@deltatecnologias.cl<br />
            
              </p>
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; 2025 <strong><span>Delta Tecnologías</span></strong>. Todos los derechos reservados.
        </div>
        <div className="credits">
          {/* Si quieres mantener el crédito a BootstrapMade, descomenta esta línea */}
          {/* Diseñado con <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a> */}
        </div>
      </div>
    </footer>
  );
}