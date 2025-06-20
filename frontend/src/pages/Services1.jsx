import React, { useEffect, useState } from 'react';
import * as bootstrap from 'bootstrap'; // Asegúrate de que Bootstrap esté correctamente importado

export default function Services() {
  // Estado para controlar qué pestaña está activa
  const [activeTab, setActiveTab] = useState('departments-tab-1');

  useEffect(() => {
    // Inicializa las pestañas de Bootstrap después de que el componente se monta
    // Esto asegura que la funcionalidad de Bootstrap se aplique a los elementos DOM
    const tabTriggerElList = [].slice.call(document.querySelectorAll('#departments .nav-link[data-bs-toggle="tab"]'));
    tabTriggerElList.map(tabTriggerEl => {
      return new bootstrap.Tab(tabTriggerEl);
    });

    // Opcional: Si quieres que el efecto de `data-aos` se dispare al cambiar de pestaña
    // aunque AOS ya debería estar inicializado globalmente si lo usas en tu app.
    // Esto es más para asegurar que el contenido de la pestaña se muestre con el efecto
    // si el contenido se renderiza condicionalmente.
  }, []);

  // Función para manejar el clic en las pestañas
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <main id="main" className="main">
      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos una amplia gama de servicios eléctricos y tecnológicos de alta calidad.</p>
        </div>
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
      </section>{/* /Services Section */}

      {/* Departments Section (Puedes renombrarlo a "Categorías de Servicios" o "Áreas de Expertise") */}
      <section id="departments" className="departments section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Áreas de Expertise</h2>
          <p>Descubre nuestras especialidades y cómo podemos ayudarte.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  {/* Usa el estado activeTab y el manejador de clic */}
                  <a
                    className={`nav-link ${activeTab === 'departments-tab-1' ? 'active show' : ''}`}
                    onClick={() => handleTabClick('departments-tab-1')}
                    data-bs-toggle="tab"
                    href="#departments-tab-1"
                  >
                    Residencial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'departments-tab-2' ? 'active' : ''}`}
                    onClick={() => handleTabClick('departments-tab-2')}
                    data-bs-toggle="tab"
                    href="#departments-tab-2"
                  >
                    Comercial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'departments-tab-3' ? 'active' : ''}`}
                    onClick={() => handleTabClick('departments-tab-3')}
                    data-bs-toggle="tab"
                    href="#departments-tab-3"
                  >
                    Industrial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'departments-tab-4' ? 'active' : ''}`}
                    onClick={() => handleTabClick('departments-tab-4')}
                    data-bs-toggle="tab"
                    href="#departments-tab-4"
                  >
                    Energías Renovables
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'departments-tab-5' ? 'active' : ''}`}
                    onClick={() => handleTabClick('departments-tab-5')}
                    data-bs-toggle="tab"
                    href="#departments-tab-5"
                  >
                    Automatización
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'departments-tab-1' ? 'active show' : ''}`} id="departments-tab-1">
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
                <div className={`tab-pane ${activeTab === 'departments-tab-2' ? 'active show' : ''}`} id="departments-tab-2">
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
                <div className={`tab-pane ${activeTab === 'departments-tab-3' ? 'active show' : ''}`} id="departments-tab-3">
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
                <div className={`tab-pane ${activeTab === 'departments-tab-4' ? 'active show' : ''}`} id="departments-tab-4">
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
                <div className={`tab-pane ${activeTab === 'departments-tab-5' ? 'active show' : ''}`} id="departments-tab-5">
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

      {/* Las secciones "Appointment" y "Doctors" están comentadas como en tu código original */}
    </main>
  );
}