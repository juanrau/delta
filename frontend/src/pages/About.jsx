import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <main id="main" className="main">
      {/* Sección Acerca de Nosotros */}
      <section id="about" className="about section light-background">
        <div className="container position-relative text-center">
          <h1>Delta Tecnologías</h1>
          {/* Imagen principal de la sección Acerca de Nosotros */}
          <div className="text-center mb-4" data-aos="fade-in">
            <img 
              src="src/assets/img/about.jpg" 
              alt="Fondo de la sección Acerca de Nosotros" 
              className="img-fluid rounded shadow" 
              style={{ maxHeight: '350px', width: 'auto' }} 
            />
          </div>

          <div className="welcome text-center mb-5" data-aos="fade-down" data-aos-delay="100">
            <p className="lead"> <h3>Líderes en soluciones eléctricas, de seguridad y en proyectos de energias sustentables  en<br />Chile.</h3></p>
          </div>{/* End Welcome */}

          <div className="content row gy-4">
            {/* Tarjeta "¿Por qué elegir a Delta Tecnologías?" */}
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card why-box border-0 shadow-sm p-4 h-100 animate-on-hover" data-aos="zoom-out" data-aos-delay="200">
                <div className="card-body d-flex flex-column">
                  {/* Ícono ad-hoc para "¿Por qué elegir a Delta Tecnologías?" */}
                  <div className="icon mb-3 text-center">
                    <i className="bi bi-award-fill display-4 text-warning"></i>
                  </div>
                  <h3 className="card-title text-center">¿Por qué elegir a Delta Tecnologías?</h3>
                  <p className="card-text flex-grow-1">
                    En <strong>Delta Tecnologías</strong>, combinamos experiencia, innovación y un compromiso inquebrantable con la seguridad y la eficiencia. Nos dedicamos a entregar soluciones eléctricas y de seguridad de la más alta calidad, diseñadas a la medida de tus necesidades. Además, estamos **certificados por la Superintendencia de Electricidad y Combustibles (SEC)**, garantizando la máxima seguridad y cumplimiento normativo en todos nuestros proyectos.
                  </p>
                  {/* Imagen dentro de la tarjeta */}
                  <div className="text-center my-3">
                    <img 
                      src="src/assets/img/descarga1.jpg" 
                      alt="Equipo de trabajo" 
                      className="img-fluid rounded" 
                      style={{ maxHeight: '180px', width: 'auto' }} 
                    />
                  </div>
                  <div className="text-center mt-auto">
                    <Link to="/servicios" className="more-btn btn btn-outline-primary rounded-pill px-4 py-2">
                      Conoce Nuestros Servicios <i className="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4 w-100">
                {/* Tarjeta: Expertos en Proyectos Eléctricos */}
                <div className="col-xl-6 col-md-6 d-flex align-items-stretch">
                  <div className="card icon-box border-0 shadow-sm p-4 h-100 animate-on-hover" data-aos="fade-up" data-aos-delay="300">
                    <div className="card-body d-flex flex-column">
                      <div className="icon mb-3 text-center"><i className="bi bi-lightning-charge-fill display-5 text-primary"></i></div>
                      <h3 className="card-title">Expertos en Proyectos Eléctricos</h3>
                      <p className="card-text flex-grow-1">Desde instalaciones residenciales hasta complejas infraestructuras industriales, cumplimos con todas las normativas <strong>SEC</strong> y la <strong>Ley de Ductos</strong>.</p>
                      <div className="text-center my-3">
                        <img 
                          src="src/assets/img/proyectos.jpg" 
                          alt="Sistemas de Seguridad" 
                          className="img-fluid rounded" 
                          style={{ maxHeight: '180px', width: 'auto' }} 
                        />
                      </div>
                      <div className="text-center mt-auto">
                        <Link to="/servicios" className="more-btn btn btn-link text-primary">Saber más <i className="bi bi-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjeta: Seguridad y Vigilancia Avanzada */}
                <div className="col-xl-6 col-md-6 d-flex align-items-stretch">
                  <div className="card icon-box border-0 shadow-sm p-4 h-100 animate-on-hover" data-aos="fade-up" data-aos-delay="400">
                    <div className="card-body d-flex flex-column">
                      <div className="icon mb-3 text-center"><i className="bi bi-shield-lock-fill display-5 text-success"></i></div>
                      <h3 className="card-title">Seguridad y Vigilancia Avanzada</h3>
                      <p className="card-text flex-grow-1"><strong>Sistemas CCTV</strong>, <strong>alarmas monitoreadas</strong> y <strong>control de acceso</strong> para proteger tu hogar o negocio con tecnología de punta.</p>
                      <div className="text-center my-3">
                        <img 
                          src="src/assets/img/descarga3.jpg" 
                          alt="Sistemas de Seguridad" 
                          className="img-fluid rounded" 
                          style={{ maxHeight: '180px', width: 'auto' }} 
                        />
                      </div>
                      <div className="text-center mt-auto">
                        <Link to="/servicios" className="more-btn btn btn-link text-primary">Saber más <i className="bi bi-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjeta: Energías Renovables */}
                <div className="col-12 d-flex align-items-stretch mt-4">
                  <div 
                    className="card border-0 shadow-sm p-4 h-100 animate-on-hover renewable-energy-card" 
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="card-body d-flex flex-column">
                      <div className="icon mb-3 text-center">
                        <i className="bi bi-tree-fill display-4 text-success"></i>
                      </div>
                      <h3 className="card-title text-center">Energías Renovables y Sostenibilidad</h3>
                      <p className="card-text text-justify flex-grow-1">
                        Comprometidos con el <strong>medio ambiente</strong>, implementamos soluciones de <strong>energías renovables</strong> para reducir tu <strong>huella de carbono</strong> y fomentar un futuro más limpio. Nuestros proyectos no solo optimizan tu consumo energético, sino que también contribuyen a la <strong>sostenibilidad</strong> del planeta.
                      </p>
                                            <div className="text-center my-3">
                        <img 
                          src="src/assets/img/renovable.jpg" 
                          alt="Sistemas de Seguridad" 
                          className="img-fluid rounded" 
                          style={{ maxHeight: '320px', width: 'auto' }} 
                        />
                      </div>
                      <div className="text-center mt-auto">
                        <Link to="/servicios" className="more-btn btn btn-outline-primary rounded-pill px-4 py-2">
                          Descubre Soluciones Verdes <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* /About Section */}

      

      {/* Sección de Preguntas Frecuentes (FAQ) */}
      {/* <section id="faq" className="faq section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Preguntas Frecuentes sobre Nuestros Servicios</h2>
          <p>Encuentra respuestas rápidas a las dudas más comunes sobre Delta Tecnologías y nuestras soluciones.</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-container">
                
                <div className="faq-item faq-active">
                  <h3>¿Qué tipo de servicios eléctricos ofrecen?</h3>
                  <div className="faq-content">
                    <p>Ofrecemos una amplia gama de servicios, incluyendo <strong>instalaciones eléctricas nuevas</strong>, <strong>remodelaciones</strong>, <strong>normalización de instalaciones existentes</strong>, <strong>certificaciones SEC</strong>, <strong>mantenciones preventivas y correctivas</strong>, y estudios de <strong>eficiencia energética</strong>. Nos adaptamos a proyectos residenciales, comerciales e industriales.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

          
                <div className="faq-item">
                  <h3>¿Trabajan con la Ley de Ductos?</h3>
                  <div className="faq-content">
                    <p>Sí, todos nuestros proyectos de canalización subterránea y aérea cumplen estrictamente con la <strong>Ley de Ductos</strong> y la normativa de la <strong>Superintendencia de Electricidad y Combustibles (SEC)</strong>, asegurando la legalidad y seguridad de tus instalaciones.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

             
                <div className="faq-item">
                  <h3>¿Qué soluciones de seguridad brindan para empresas?</h3>
                  <div className="faq-content">
                    <p>Para empresas, implementamos <strong>sistemas de CCTV</strong> con cámaras de alta resolución, <strong>alarmas monitoreadas</strong>, <strong>control de acceso biométrico</strong> o con tarjetas, y <strong>cercos eléctricos</strong>. Todas nuestras soluciones son diseñadas para una protección integral y adaptada a tus necesidades específicas.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

              
                <div className="faq-item">
                  <h3>¿Ofrecen servicios de mantención para sistemas existentes?</h3>
                  <div className="faq-content">
                    <p>Claro, brindamos servicios de <strong>mantención preventiva y correctiva</strong> para sistemas eléctricos y de seguridad ya instalados. Esto incluye revisiones periódicas, detección de fallas, reparaciones y actualizaciones para prolongar la vida útil y asegurar el óptimo funcionamiento de tus equipos.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                
                <div className="faq-item">
                  <h3>¿Cuál es el proceso para solicitar un presupuesto?</h3>
                  <div className="faq-content">
                    <p>Puedes solicitar un presupuesto a través de nuestro <strong>formulario de contacto</strong> en la sección "Contacto", enviándonos un correo electrónico o llamándonos directamente. Uno de nuestros especialistas se pondrá en contacto contigo para entender tus necesidades y coordinar una visita si es necesario.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* /Faq Section */}
    </main>
  );
}