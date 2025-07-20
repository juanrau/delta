import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    emailjs.sendForm('service_l8a1c8r', 'template_7b3t5qq', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          setSubmitMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');
          setFormData({
            nombre: '',
            email: '',
            telefono: '',
            mensaje: '',
          });
      }, (error) => {
          console.log(error.text);
          setSubmitMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      });

    setIsSubmitting(false);
  };

  return (
    <main id="main" className="main">
      <section id="contact-hero" className="hero-section py-5 bg-light-gray">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3">Contáctanos</h1>
          <p className="lead text-muted">Estamos aquí para escucharte y ofrecerte las mejores soluciones para tus necesidades eléctricas y de seguridad.</p>
        </div>
      </section>

      <section id="contact-details-form" className="section py-5">
        <div className="container">
          <div className="row gy-4 align-items-stretch">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="info-item card border-0 shadow p-4 h-100 animate-on-hover text-justify">
                <div className="card-body d-flex flex-column justify-content-center border border-light"  >
                  <h3 className="card-title text-center mb-4 fw-bold">Información Clave</h3>
                  <p className="text-center mb-4 text-secondary centrar ">
                    En <strong>Delta Tecnologías</strong>, valoramos cada interacción. Es fundamental para nosotros atender a nuestros <strong>clientes</strong> y <strong>potenciales clientes</strong> de la manera más <strong>eficiente y personalizada</strong>. Tu consulta es nuestra prioridad y nos comprometemos a darte una respuesta rápida y soluciones claras.
                  </p>

                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3 flex-shrink-0">
                      <MdEmail className="contact-icon text-primary" />
                    </div>
                    <div>
                      <strong className="text-dark">Email:</strong> contacto@deltatecnologias.cl
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3 flex-shrink-0">
                      <MdPhone className="contact-icon text-primary" />
                    </div>
                    <div>
                      <strong className="text-dark">Teléfono:</strong> +56 9 8318 5305
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <img
                      src="assets/img/contact-us.jpg"
                      alt="Equipo de Atención al Cliente"
                      className="img-fluid rounded shadow-sm"
                      style={{ maxHeight: '200px', objectFit: 'cover', width: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow p-4 h-100 animate-on-hover">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center mb-4 fw-bold">Envíanos un Mensaje Directo</h3>
                  <form ref={form} onSubmit={handleSubmit} className="php-email-form flex-grow-1 d-flex flex-column">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        id="name"
                        placeholder="Tu Nombre Completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Tu Correo Electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="telefono"
                        id="telefono"
                        placeholder="Tu Teléfono (Opcional)"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 flex-grow-1">
                      <textarea
                        className="form-control h-100"
                        name="mensaje"
                        rows="5"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="text-center mt-auto pt-3">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill px-5 py-2 fw-bold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </button>
                    </div>
                    {submitMessage && (
                      <div className={`mt-3 alert ${submitMessage.includes('Gracias') ? 'alert-success' : 'alert-danger'}`} role="alert" data-aos="zoom-in">
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}