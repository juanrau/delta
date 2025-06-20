// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaUserTie, FaCheckCircle, FaAward, FaTools } from 'react-icons/fa'; // Iconos de ejemplo
import  '../index.css'

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us" >
      <h2 className="text-center mb-5 fw-bold">¿Por Qué Elegir Delta Tecnologías?</h2>
      <p className="text-center lead text-muted mb-5 letra1">
        En Delta Tecnologías, no solo ofrecemos servicios; entregamos <strong>soluciones integrales</strong> con la más alta calidad y un compromiso inquebrantable con la <strong>excelencia y la satisfacción del cliente.</strong>
      </p>

      <div className="row gy-4">
        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="feature-box text-center p-4 rounded shadow-sm h-100 animate-on-hover">
            <FaUserTie className="icon mb-3 text-primary" />
            <h4 className="fw-bold">Profesionalismo Inigualable</h4>
            <p className="text-secondary text-justify">Nuestro equipo está compuesto por expertos altamente calificados y certificados, dedicados a ofrecer un servicio impecable.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="feature-box text-center p-4 rounded shadow-sm h-100 animate-on-hover">
            <FaCheckCircle className="icon mb-3 text-primary" />
            <h4 className="fw-bold">Calidad y Fiabilidad</h4>
            <p className="text-secondary text-justify">Implementamos solo los mejores materiales y tecnologías, asegurando la durabilidad y eficiencia de cada proyecto.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-box text-center p-4 rounded shadow-sm h-100 animate-on-hover">
            <FaAward className="icon mb-3 text-primary" />
            <h4 className="fw-bold">Experiencia Comprobada</h4>
            <p className="text-secondary text-justify">Décadas de experiencia en la industria nos avalan, con un portafolio de proyectos exitosos y clientes satisfechos.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="feature-box text-center p-4 rounded shadow-sm h-100 animate-on-hover">
            <FaTools className="icon mb-3 text-primary" />
            <h4 className="fw-bold">Soluciones a Medida</h4>
            <p className="text-secondary text-justify">Nos adaptamos a tus necesidades específicas, diseñando y ejecutando soluciones personalizadas que superan expectativas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}