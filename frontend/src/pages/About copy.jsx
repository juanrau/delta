// src/pages/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos'; // Importamos la librería AOS
import 'aos/dist/aos.css'; // Importamos los estilos CSS de AOS

export default function About() {
  // Inicializa AOS cuando el componente se monta
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de aceleración
      once: true, // Las animaciones solo deben ocurrir una vez al desplazarse hacia abajo
      mirror: false, // Las animaciones no se repiten al desplazarse hacia arriba
    });
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar

  return (
    <main id="main" className="main">
      {/* Sección Acerca de Nosotros */}
      <section id="about" className="about section light-background">
        {/* Imagen de fondo de la sección (asegúrate de que exista en public/assets/img/) */}
       

        <div className="container position-relative">
           <img src="src\assets\img\about.jpg" alt="Fondo de la sección Acerca de Nosotros" data-aos="fade-in" className="aos-init aos-animate"  ml-10 style={{ maxHeight: '280px', marginRight: '220px' }}/>
          <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
            <h2>Acerca de Delta Tecnologías</h2>
            <p>Líderes en soluciones eléctricas y de seguridad en Chile.</p>
          </div>{/* End Welcome */}

          <div className="content row gy-4">
           
            <div className="col-lg-4 d-flex align-items-stretch">
              
              <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                <h3>¿Por qué elegir a Delta Tecnologías?</h3>
                <p>
                  En **Delta Tecnologías**, combinamos experiencia, innovación y un compromiso inquebrantable con la seguridad y la eficiencia. Nos dedicamos a entregar soluciones eléctricas y de seguridad de la más alta calidad, diseñadas a la medida de tus necesidades.
                </p>
                 <img src="src\assets\img\descarga1.jpg" alt="Fondo de la sección Acerca de Nosotros1" data-aos="fade-in" className="aos-init aos-animate"   style={{ maxHeight: '180px', marginRight: '60px' }}/>
                <div className="text-center">
                  <a href="" className="more-btn">Conoce Nuestros Servicios <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row gy-4">
                      <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box">
                          <i className="bi bi-lightning"></i> {/* Ícono de rayo */}
                          <h3>Expertos en Proyectos Eléctricos</h3>
                          <p>Desde instalaciones residenciales hasta complejas infraestructuras industriales, cumplimos con todas las normativas SEC y la Ley de Ductos.</p>
                        </div>
                      </div>{/* End Icon Box */}
                      <div className="col-12" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon-box">
                          <i className="bi bi-shield-lock"></i> {/* Ícono de seguridad */}
                          <h3>Seguridad y Vigilancia Avanzada</h3>
                          <p>Sistemas CCTV, alarmas monitoreadas y control de acceso para proteger tu hogar o negocio con tecnología de punta.</p>
                           <img src="src\assets\img\descarga3.jpg" alt="Fondo de la sección Acerca de Nosotros1" data-aos="fade-in" className="aos-init aos-animate"   style={{ maxHeight: '180px', marginRight: '80px' }}/>
                        </div>
                      </div>{/* End Icon Box */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 d-flex align-items-stretch justify-content-center"> {/* Agregado justify-content-center para centrar la imagen */}
                  <div
                    className="img-container"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{
                      backgroundImage: "url('assets/img/electrician-working.jpg')", // Asegúrate de que esta imagen exista
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '100%'
                    }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* /About Section */}

      {/* Sección de Preguntas Frecuentes (FAQ) */}
      <section id="faq" className="faq section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Preguntas Frecuentes sobre Nuestros Servicios</h2>
          <p>Encuentra respuestas rápidas a las dudas más comunes sobre Delta Tecnologías y nuestras soluciones.</p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-container">

                <div className="faq-item faq-active"> {/* Puedes controlar 'faq-active' con estado de React o JS */}
                  <h3>¿Qué tipo de servicios eléctricos ofrecen?</h3>
                  <div className="faq-content">
                    <p>Ofrecemos una amplia gama de servicios, incluyendo **instalaciones eléctricas nuevas, remodelaciones, normalización de instalaciones existentes, certificaciones SEC, mantenciones preventivas y correctivas**, y estudios de eficiencia energética. Nos adaptamos a proyectos residenciales, comerciales e industriales.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div className="faq-item">
                  <h3>¿Trabajan con la Ley de Ductos?</h3>
                  <div className="faq-content">
                    <p>Sí, todos nuestros proyectos de canalización subterránea y aérea cumplen estrictamente con la **Ley de Ductos** y la normativa de la Superintendencia de Electricidad y Combustibles (SEC), asegurando la legalidad y seguridad de tus instalaciones.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div className="faq-item">
                  <h3>¿Qué soluciones de seguridad brindan para empresas?</h3>
                  <div className="faq-content">
                    <p>Para empresas, implementamos **sistemas de CCTV con cámaras de alta resolución, alarmas monitoreadas, control de acceso biométrico o con tarjetas, y cercos eléctricos**. Todas nuestras soluciones son diseñadas para una protección integral y adaptada a tus necesidades específicas.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div className="faq-item">
                  <h3>¿Ofrecen servicios de mantención para sistemas existentes?</h3>
                  <div className="faq-content">
                    <p>Claro, brindamos servicios de **mantención preventiva y correctiva** para sistemas eléctricos y de seguridad ya instalados. Esto incluye revisiones periódicas, detección de fallas, reparaciones y actualizaciones para prolongar la vida útil y asegurar el óptimo funcionamiento de tus equipos.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div className="faq-item">
                  <h3>¿Cuál es el proceso para solicitar un presupuesto?</h3>
                  <div className="faq-content">
                    <p>Puedes solicitar un presupuesto a través de nuestro formulario de contacto en la sección "Contacto", enviándonos un correo electrónico o llamándonos directamente. Uno de nuestros especialistas se pondrá en contacto contigo para entender tus necesidades y coordinar una visita si es necesario.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>{/* /Faq Section */}
    </main>
  );
}