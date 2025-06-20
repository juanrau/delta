import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Asegúrate de que AOS esté instalado y sus estilos importados

import Seo from '../components/Seo';
import Hero from '../components/Hero'; // Ya lo tienes
import ServicesList from '../components/ServicesList'; // Asegúrate que el nombre del archivo coincida (ServicesList.jsx)
import ImageCarousel from '../components/ImageCarousel'; // Ya lo tienes
import AboutCompany from '../components/AboutCompany'; // Ya lo tienes

// --- Nuevos componentes que crearemos ---
import WhyChooseUs from '../components/WhyChooseUs'; 
import EnvironmentalCommitment from '../components/EnvironmentalCommitment';
import CallToAction from '../components/CallToAction';
// --- Fin nuevos componentes ---


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Las animaciones solo se ejecutan una vez al hacer scroll
      mirror: false, // Las animaciones no se repiten al hacer scroll hacia arriba
    });
  }, []);

  return (
    <>
      <Seo title="Delta Tecnologías | Soluciones Integrales en Electricidad y Tecnología" />
      
      {/* Sección 1: Hero Principal - Impacto inicial */}
      <Hero 
        title="Delta Tecnologías" 
        subtitle="Soluciones eléctricas y tecnológicas profesionales para un futuro más seguro y eficiente." 
        // Puedes añadir una imagen de fondo o un botón CTA aquí si tu componente Hero lo permite
      />
      
      {/* Sección 2: Carrousel de Imágenes - Mostrar visualmente el trabajo o equipo */}
      <section className="py-5" data-aos="fade-up"> {/* Añadimos data-aos para una animación de entrada */}
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Nuestra Visión en Imágenes</h2>
          <ImageCarousel />
        </div>
      </section>

      {/* Sección 3: Por Qué Elegirnos - Comunicar las ventajas y el valor de Delta */}
      {/* Este componente será nuevo, donde destacaremos la calidad, profesionalismo, etc. */}
      <section className="py-5 bg-light-gray" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <WhyChooseUs />
        </div>
      </section>

      {/* Sección 4: Nuestros Servicios - Detallar las ofertas clave de Delta */}
      {/* Descomentamos y usamos ServicesList */}
      <section className="py-5" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Nuestros Servicios Principales</h2>
          <ServicesList />
        </div>
      </section>
      
      {/* Sección 5: Compromiso Ambiental - Destacar la sostenibilidad y el impacto positivo */}
      {/* Este componente será nuevo */}
      <section className="py-5 bg-primary-light" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <EnvironmentalCommitment />
        </div>
      </section>

      {/* Sección 6: Acerca de la Empresa - Complemento informativo, quizás más detalle sobre la historia */}
      {/* Descomentamos AboutCompany. Podría ser un resumen aquí y el detalle en una página 'Nosotros' */}
      {/* <section className="py-5" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
          <AboutCompany />
        </div>
      </section> */}

      {/* Sección 7: Llamada a la Acción - Invitar al visitante a contactar o explorar más */}
      {/* Este componente será nuevo */}
      <section className="py-5 bg-primary" data-aos="zoom-in" data-aos-delay="500">
        <hr></hr>
        <div className="container text-center text-white">
          <CallToAction />
        </div>
      </section>
    </>
  );
}