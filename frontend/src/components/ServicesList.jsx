// src/components/ServicesList.jsx
import React from 'react';
import { FaBolt, FaShieldAlt, FaVideo, FaSolarPanel, FaTools, FaAmbulance, FaNetworkWired, FaSatelliteDish, FaLightbulb } from 'react-icons/fa'; // Importa íconos relevantes
import { FaGear } from 'react-icons/fa6'; // Otro ícono de ejemplo si necesitas

export default function ServicesList() {
  const services = [
    {
      icon: FaBolt,
      title: "Instalaciones Eléctricas",
      description: "Diseño e implementación de sistemas eléctricos seguros y eficientes para hogares y empresas."
    },
    {
      icon: FaShieldAlt,
      title: "Alarmas y Cercos Eléctricos",
      description: "Soluciones de seguridad perimetral y sistemas de alarma avanzados para tu tranquilidad."
    },
    {
      icon: FaVideo,
      title: "Sistemas de CCTV",
      description: "Monitoreo por cámaras de seguridad de alta definición para una vigilancia efectiva 24/7."
    },
    {
      icon: FaSolarPanel,
      title: "Paneles Solares",
      description: "Instalación y mantenimiento de sistemas fotovoltaicos para una energía limpia y sostenible."
    },
    {
      icon: FaTools, // O FaGear si prefieres
      title: "Mantenimiento Preventivo y Correctivo",
      description: "Servicios integrales para asegurar el óptimo funcionamiento y la vida útil de tus instalaciones."
    },
    {
      icon: FaAmbulance,
      title: "Atención de Emergencias",
      description: "Disponibilidad 24/7 para resolver incidencias eléctricas urgentes de forma rápida y segura."
    },
    {
      icon: FaNetworkWired,
      title: "Redes de Datos",
      description: "Implementación de infraestructura de red robusta y de alta velocidad para la conectividad de tu negocio."
    },
    {
      icon: FaSatelliteDish,
      title: "Proyectos de Telemetría",
      description: "Desarrollo de sistemas para monitoreo y control remoto de datos y equipos."
    },
    {
      icon: FaLightbulb,
      title: "Proyectos de Iluminación",
      description: "Diseño y ejecución de soluciones de iluminación eficientes y estéticas para diversos ambientes."
    },
  ];

  return (
    <div className="services-section "> {/* Quitamos estilos en línea, irán al CSS */}
      <h2 className="text-center mb-5 fw-bold">Nuestros Servicios Integrales</h2>
      <p className="text-center lead text-muted mb-5">
        En Delta Tecnologías, ofrecemos una amplia gama de soluciones especializadas para cubrir todas tus necesidades en electricidad, seguridad y tecnología.
      </p>

      <div className="row justify-content-center g-4"> {/* g-4 para espaciado de columnas */}
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            <div className="service-item card h-100 shadow-sm border-0 animate-on-hover">
              <div className="card-body text-center d-flex flex-column">
                <service.icon className="service-icon mb-3 text-primary" /> {/* Usamos el componente de icono */}
                <h4 className="fw-bold mb-2">{service.title}</h4>
                <p className="text-secondary flex-grow-1">{service.description}</p>
                {/* Opcional: Un botón para más detalles si tuvieras páginas dedicadas */}
                {/* <a href="#" className="btn btn-sm btn-outline-primary mt-3">Saber más</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}