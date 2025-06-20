import axios from 'axios';
import Seo from '../components/Seo';
import Hero from '../components/Hero';

export default function Contacto() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      await axios.post('http://localhost:5000/api/contacto', Object.fromEntries(data));
      alert('Gracias por tu mensaje');
    } catch (error) {
      alert('Hubo un error al enviar el mensaje');
    }
  };

  return (
    <>
      <Seo title="Contáctanos | Delta Tecnologías" />
       <Hero title="Delta Tecnologías" subtitle="Soluciones eléctricas y tecnológicas profesionales" />
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem auto' }}>
        <input type="text" name="nombre" placeholder="Nombre" required style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="email" name="email" placeholder="Email" required style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="tel" name="telefono" placeholder="Teléfono" style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <textarea name="mensaje" placeholder="Tu mensaje..." required style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}></textarea>
        <button type="submit" style={{ backgroundColor: '#002244', color: 'white', padding: '0.5rem 1rem' }}>Enviar</button>
      </form>
    </>
  );
}