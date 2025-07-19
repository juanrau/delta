import React, { useEffect, useState, useRef } from 'react'; // Importamos useRef
import axios from 'axios';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  '../index.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import ReCAPTCHA from 'react-google-recaptcha'; // Importamos ReCAPTCHA

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    recaptchaToken: null // Estado para almacenar el token de reCAPTCHA
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const recaptchaRef = useRef(null); // Referencia al componente reCAPTCHA

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

  // Función que se llama cuando reCAPTCHA se completa
  const onRecaptchaChange = (token) => {
    setFormData(prevState => ({
      ...prevState,
      recaptchaToken: token
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // **Validación de reCAPTCHA en el frontend antes de enviar**
    if (!formData.recaptchaToken) {
      setSubmitMessage('Por favor, completa el reCAPTCHA.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contacto', formData);
      
      setSubmitMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');
      setFormData({ // Limpiar el formulario y resetear el token
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        recaptchaToken: null
      });
      if (recaptchaRef.current) {
        recaptchaRef.current.reset(); // Resetear el checkbox de reCAPTCHA
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error.response ? error.response.data : error.message);
      setSubmitMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      if (recaptchaRef.current) {
        recaptchaRef.current.reset(); // Resetear el checkbox incluso si hay error
      }
    } finally {
      setIsSubmitting(false);
    }
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
                  
                  {/* <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3 flex-shrink-0">
                      <MdLocationOn className="contact-icon text-primary" />
                    </div>
                    <div>
                      <strong className="text-dark">Dirección:</strong> Av. Principal 123, Santiago, Chile
                    </div>
                  </div> */}
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
                  <form onSubmit={handleSubmit} className="php-email-form flex-grow-1 d-flex flex-column">
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

                    {/* Componente reCAPTCHA */}
                    <div className="mb-3 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
                      <ReCAPTCHA
                        ref={recaptchaRef} // Asignamos la referencia
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // <<-- ¡IMPORTANTE! Reemplaza con tu clave de sitio
                        onChange={onRecaptchaChange}
                        onExpired={() => setFormData(prevState => ({ ...prevState, recaptchaToken: null }))} // Resetea el token si expira
                        onErrored={() => setFormData(prevState => ({ ...prevState, recaptchaToken: null }))} // Resetea el token si hay un error
                      />
                    </div>

                    <div className="text-center mt-auto pt-3">
                      <button 
                        type="submit" 
                        className="btn btn-primary rounded-pill px-5 py-2 fw-bold" 
                        disabled={isSubmitting || !formData.recaptchaToken}
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

          {/* <div className="mt-5" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-center mb-4 fw-bold">Encuéntranos en el Mapa</h3>
            <div className="map-responsive rounded shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.626244439167!2d-70.66926315!3d-33.4474872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5b9f7a7d45f%3A0x6a2c3f5e5b3c3c7e!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sus!4v1718875500000!5m2!1ses-419!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Delta Tecnologías en Santiago, Chile"
              ></iframe>
            </div>
          </div> */}

        </div>
      </section>
    </main>
  );
}