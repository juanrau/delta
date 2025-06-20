// src/pages/Services.jsx
import React, { useEffect } from 'react';
import * as bootstrap from 'bootstrap';
import ServicesList from '../components/ServicesList';
import  '../index.css'

export default function Services() {
  useEffect(() => {
    // Si tienes alguna lógica JS para las pestañas de 'Departments' (Bootstrap Tabs),
    // necesitarías gestionarla aquí con useEffect o usar un componente de React que maneje pestañas.
    // Asegúrate de que Bootstrap JS esté cargado para esto.
  }, []);

  return (
    <main id="main" className="main py-5">
      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Areas de Desarrollo</h2>
          
        </div>
        <hr></hr>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-lightning-charge"></i> {/* Ícono de electricidad */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Instalaciones Eléctricas</h3>
                </a>
                <p>Realizamos instalaciones eléctricas seguras y eficientes para hogares y comercios, cumpliendo con todas las normativas vigentes.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-tools"></i> {/* Ícono de mantención */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Mantenciones Eléctricas</h3>
                </a>
                <p>Servicios de mantención preventiva y correctiva para asegurar el rendimiento óptimo de tus sistemas eléctricos.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-shield-lock"></i> {/* Ícono de seguridad */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Sistemas de Seguridad</h3>
                </a>
                <p>Instalación y configuración de cámaras de vigilancia, alarmas y sistemas de control de acceso para tu tranquilidad.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-sun-fill"></i> {/* Ícono de energía solar */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Paneles Solares</h3>
                </a>
                <p>Diseño e instalación de sistemas fotovoltaicos para el autoconsumo y la generación de energía limpia.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-house-door-fill"></i> {/* Ícono de domótica */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Domótica y Automatización</h3>
                </a>
                <p>Convierte tu hogar o negocio en un espacio inteligente con nuestras soluciones de automatización.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-tools"></i> {/* Ícono general de servicios */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Consultoría y Asesoría</h3>
                </a>
                <p>Te asesoramos en tus proyectos, ofreciendo soluciones a medida y optimizando tus recursos.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </section>{/* /Services Section */}
   
        <section className="py-5" data-aos="fade-up" data-aos-delay="200">
              <div className="container">
                <h2 className="text-center mb-5 fw-bold">Nuestros Servicios Principales</h2>
                <ServicesList />
              </div>
            </section>

      {/* Departments Section (Puedes renombrarlo a "Categorías de Servicios" o "Áreas de Expertise") */}
      <section id="departments" className="departments section">
        <hr></hr>
        <div className="container section-title" data-aos="fade-up">
          <h2>Áreas de Expertise</h2>
          <p>Descubre nuestras especialidades y cómo podemos ayudarte.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  {/* Los data-bs-toggle y href de Bootstrap Tabs deben gestionarse en React */}
                  <a className="nav-link active show" data-bs-toggle="tab" href="#departments-tab-1">Residencial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-2">Comercial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-3">Industrial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-4">Energías Renovables</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-5">Automatización</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="departments-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Servicios Residenciales</h3>
                      <p className="fst-italic">Soluciones eléctricas y de seguridad para tu hogar, diseñadas para tu confort y tranquilidad.</p>
                      <p>Desde instalaciones completas hasta reparaciones menores, garantizamos un servicio seguro y de calidad para tu vivienda.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-1.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="departments-tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Soluciones Comerciales</h3>
                      <p className="fst-italic">Optimización de sistemas eléctricos y de seguridad para tu negocio, impulsando la eficiencia y protección.</p>
                      <p>Instalaciones robustas y sistemas de seguridad adaptados a las necesidades específicas de tu comercio.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-2.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                {/* Puedes continuar adaptando las otras pestañas de Departments */}
                <div className="tab-pane" id="departments-tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Proyectos Industriales</h3>
                      <p className="fst-italic">Expertos en instalaciones eléctricas de alta complejidad y sistemas de seguridad para entornos industriales.</p>
                      <p>Diseño e implementación de infraestructura eléctrica y de seguridad para fábricas y grandes instalaciones.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-3.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="departments-tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Energías Renovables</h3>
                      <p className="fst-italic">Comprometidos con el medio ambiente, ofrecemos soluciones de energía solar para un futuro sostenible.</p>
                      <p>Instalación de paneles solares y sistemas energéticos eficientes para reducir tu huella de carbono.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-4.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="departments-tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Sistemas de Automatización</h3>
                      <p className="fst-italic">Moderniza tu espacio con soluciones de domótica y automatización, para un control total y mayor comodidad.</p>
                      <p>Desde la iluminación inteligente hasta sistemas de seguridad integrados, hacemos tu vida más fácil.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/departments-5.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* /Departments Section */}

      {/* Las secciones "Appointment" y "Doctors" no parecen encajar directamente con "Delta Tecnologías",
          pero las incluyo aquí comentadas por si quieres adaptarlas a "Agendar Visita" o "Nuestro Equipo" */}
      {/*
      <section id="appointment" className="appointment section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Agendar Visita / Cita</h2>
          <p>Solicita una visita técnica o una consulta con nuestros especialistas.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Tu Nombre" required="" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Tu Correo" required="" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Tu Teléfono" required="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Fecha de Visita" required="" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="service_type" id="service_type" className="form-select" required="">
                  <option value="">Selecciona Tipo de Servicio</option>
                  <option value="Instalacion Electrica">Instalación Eléctrica</option>
                  <option value="Mantencion Electrica">Mantención Eléctrica</option>
                  <option value="Sistema Seguridad">Sistema de Seguridad</option>
                </select>
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="specialist" id="specialist" className="form-select" required="">
                  <option value="">Selecciona Especialista</option>
                  <option value="Electricista A">Electricista A</option>
                  <option value="Tecnico Seguridad B">Técnico en Seguridad B</option>
                  <option value="Consultor General">Consultor General</option>
                </select>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Mensaje (Opcional)"></textarea>
            </div>
            <div className="mt-3">
              <div className="loading">Cargando</div>
              <div className="error-message"></div>
              <div className="sent-message">Tu solicitud de visita ha sido enviada con éxito. ¡Gracias!</div>
              <div className="text-center"><button type="submit">Solicitar Visita</button></div>
            </div>
          </form>
        </div>
      </section>
      <section id="doctors" className="doctors section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Nuestro Equipo</h2>
          <p>Conoce a los profesionales detrás de Delta Tecnologías.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Juan Pérez</h4>
                  <span>Ingeniero Eléctrico Jefe</span>
                  <p>Experto en diseño e implementación de sistemas eléctricos complejos.</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-member d-flex align-items-start">
                <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>María González</h4>
                  <span>Especialista en Seguridad Electrónica</span>
                  <p>Diseño e instalación de sistemas de videovigilancia y alarmas.</p>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""> <i className="bi bi-linkedin"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </main>
  );
}