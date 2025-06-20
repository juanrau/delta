// src/components/EnvironmentalCommitment.jsx
import React from 'react';
import { FaLeaf, FaSolarPanel, FaRecycle } from 'react-icons/fa'; // Iconos de ejemplo
import  '../index.css'

export default function EnvironmentalCommitment() {
  return (
    <div className="environmental-commitment text-center">
      <h2 className="mb-5 fw-bold">Compromiso con la Sostenibilidad y el Medio Ambiente</h2>
      <p className="lead  mb-5">
        En Delta Tecnologías, nuestra visión se extiende más allá de la eficiencia y la seguridad. Estamos <strong classname="fst-italic">profundamente comprometidos con el cuidado del planeta,</strong> impulsando soluciones que no solo benefician a nuestros clientes, sino también al medio ambiente.
      </p>

      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="commitment-item p-4 rounded shadow-sm h-100 bg-white text-dark animate-on-hover">
            <FaSolarPanel className="icon mb-3 text-success" />
            <h4 className="fw-bold">Energías Renovables</h4>
            <p className="text-secondary">Impulsamos la adopción de paneles solares y otras fuentes de energía limpia para reducir la huella de carbono.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="commitment-item p-4 rounded shadow-sm h-100 bg-white text-dark animate-on-hover">
            <FaLeaf className="icon mb-3 text-success" />
            <h4 className="fw-bold">Prácticas Sostenibles</h4>
            <p className="text-secondary">Desde la gestión de residuos hasta el uso eficiente de recursos, integramos la sostenibilidad en cada operación.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="commitment-item p-4 rounded shadow-sm h-100 bg-white text-dark animate-on-hover">
            <FaRecycle className="icon mb-3 text-success" />
            <h4 className="fw-bold">Reducción de Impacto</h4>
            <p className="text-secondary">Trabajamos para minimizar el impacto ambiental de nuestras instalaciones y servicios, promoviendo un futuro más verde.</p>
          </div>
        </div>
      </div>
    </div>
  );
}