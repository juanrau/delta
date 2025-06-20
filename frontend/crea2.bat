
:: Contenido package.json (backend)
(
echo {
echo   "name": "delta-backend",
echo   "version": "1.0.0",
echo   "description": "Backend API for Delta Tecnologías",
echo   "main": "server.js",
echo   "scripts": {
echo     "start": "node server.js",
echo     "dev": "nodemon server.js"
echo   },
echo   "dependencies": {
echo     "cors": "^2.8.5",
echo     "dotenv": "^16.3.1",
echo     "express": "^4.18.2",
echo     "helmet": "^7.0.0",
echo     "morgan": "^1.10.0",
echo     "mysql2": "^3.7.0",
echo     "sequelize": "^6.35.2"
echo   }
echo }
) > backend\package.json

:: Contenido package.json (frontend)
(
echo {
echo   "name": "delta-frontend",
echo   "private": true,
echo   "version": "0.1.0",
echo   "scripts": {
echo     "dev": "vite",
echo     "build": "vite build",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "axios": "^1.6.7",
echo     "react": "^18.2.0",
echo     "react-dom": "^18.2.0",
echo     "react-helmet": "^6.1.0",
echo     "react-router-dom": "^6.22.0"
echo   },
echo   "devDependencies": {
echo     "@vitejs/plugin-react": "^4.2.0",
echo     "vite": "^5.1.6"
echo   }
echo }
) > frontend\package.json

:: index.html
(
echo <!DOCTYPE html>
echo ^<html lang="es"^>
echo ^<head^>
echo   ^<meta charset="UTF-8" /^>
echo   ^<link rel="icon" type="image/svg+xml" href="/favicon.ico" /^>
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"/^>
echo   ^<title^>Delta Tecnologías^</title^>
echo ^</head^>
echo ^<body^>
echo   ^<div id="root"^><\/div^>
echo   ^<script type="module" src="/src/main.jsx"^><\/script^>
echo ^</body^>
echo ^</html^>
) > frontend\index.html

:: main.jsx
(
echo import React from 'react';
echo import ReactDOM from 'react-dom/client';
echo import App from './App';
echo 
echo ReactDOM.createRoot(document.getElementById('root')).render(
echo   ^<React.StrictMode^>
echo     ^<App /^>
echo   ^</React.StrictMode^>
echo );
) > frontend\src\main.jsx

:: App.jsx
(
echo import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
echo import Home from './pages/Home';
echo import Services from './pages/Services';
echo import About from './pages/About';
echo import Contact from './pages/Contact';
echo import Navbar from './components/Navbar';
echo 
echo export default function App() {
echo   return (
echo     ^<Router^>
echo       ^<Navbar /^>
echo       ^<Routes^>
echo         ^<Route path="/" element={^<Home /^>} /^>
echo         ^<Route path="/servicios" element={^<Services /^>} /^>
echo         ^<Route path="/sobre-nosotros" element={^<About /^>} /^>
echo         ^<Route path="/contacto" element={^<Contact /^>} /^>
echo       ^</Routes^>
echo     ^</Router^>
echo   );
echo }
) > frontend\src\App.jsx

:: Seo.jsx
(
echo import React from 'react';
echo import { Helmet } from 'react-helmet';
echo 
echo export default function Seo({ title, description }) {
echo   return (
echo     ^<Helmet^>
echo       ^<title^>{title}^</title^>
echo       ^<meta name="description" content={description || "Soluciones eléctricas y tecnológicas profesionales"} /^>
echo       ^<meta property="og:title" content={title} /^>
echo       ^<meta property="og:description" content={description || "Soluciones eléctricas y tecnológicas profesionales"} /^>
echo       ^<meta property="og:type" content="website" /^>
echo       ^<meta property="og:url" content="https://deltatec.com.ar"  /^>
echo       ^<link rel="canonical" href="https://deltatec.com.ar"  /^>
echo     ^</Helmet^>
echo   );
echo }
) > frontend\src\components\Seo.jsx

:: Navbar.jsx
(
echo import { Link } from 'react-router-dom';
echo 
echo export default function Navbar() {
echo   return (
echo     ^<nav style={{ backgroundColor: '#002244', color: 'white', padding: '1rem' }}^>
echo       ^<Link to="/" style={{ color: 'white', marginRight: '1rem' }}^>Inicio^</Link^>
echo       ^<Link to="/servicios" style={{ color: 'white', marginRight: '1rem' }}^>Servicios^</Link^>
echo       ^<Link to="/sobre-nosotros" style={{ color: 'white', marginRight: '1rem' }}^>Sobre Nosotros^</Link^>
echo       ^<Link to="/contacto" style={{ color: 'white' }}^>Contáctanos^</Link^>
echo     ^</nav^>
echo   );
echo }
) > frontend\src\components\Navbar.jsx

:: Hero.jsx
(
echo export default function Hero({ title, subtitle }) {
echo   return (
echo     ^<header style={{ backgroundColor: '#1A5F9E', color: 'white', textAlign: 'center', padding: '4rem 2rem' }}^>
echo       ^<h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}^>{title}^</h1^>
echo       ^<p style={{ fontSize: '1.25rem' }}^>{subtitle}^</p^>
echo     ^</header^>
echo   );
echo }
) > frontend\src\components\Hero.jsx

:: Services.jsx (componente)
(
echo export default function ServicesList() {
echo   return (
echo     ^<section style={{ padding: '2rem' }}^>
echo       ^<h2^>Nuestros Servicios^</h2^>
echo       ^<ul^>
echo         ^<li^>Mantenimiento preventivo y correctivo de instalaciones eléctricas^</li^>
echo         ^<li^>Instalación de sistemas CCTV^</li^>
echo         ^<li^>Instalación de alarmas residenciales e industriales^</li^>
echo         ^<li^>Paneles solares y energía renovable^</li^>
echo       ^</ul^>
echo     ^</section^>
echo   );
echo }
) > frontend\src\components\Services.jsx

:: Footer.jsx
(
echo export default function Footer() {
echo   return (
echo     ^<footer style={{ backgroundColor: '#002244', color: 'white', textAlign: 'center', padding: '2rem' }}^>
echo       ^<p^>© 2025 Delta Tecnologías — Todos los derechos reservados^</p^>
echo     ^</footer^>
echo   );
echo }
) > frontend\src\components\Footer.jsx

:: Home.jsx
(
echo import Seo from '../components/Seo';
echo import Hero from '../components/Hero';
echo import { ServicesList } from '../components/Services';
echo 
echo export default function Home() {
echo   return (
echo     ^<>
echo       ^<Seo title="Delta Tecnologías | Electricidad, CCTV y Paneles Solares" /^>
echo       ^<Hero title="Delta Tecnologías" subtitle="Soluciones eléctricas y tecnológicas profesionales" /^>
echo       ^<ServicesList /^>
echo     ^</>
echo   );
echo }
) > frontend\src\pages\Home.jsx

:: Services.jsx
(
echo import Seo from '../components/Seo';
echo 
echo export default function ServicesPage() {
echo   return (
echo     ^<>
echo       ^<Seo title="Nuestros Servicios | Delta Tecnologías" /^>
echo       ^<section style={{ padding: '2rem' }}^>
echo         ^<h2^>Servicios que ofrecemos^</h2^>
echo         ^<ul^>
echo           ^<li^>Mantenimiento preventivo y correctivo de instalaciones eléctricas^</li^>
echo           ^<li^>Instalación de sistemas CCTV^</li^>
echo           ^<li^>Instalación de alarmas residenciales e industriales^</li^>
echo           ^<li^>Paneles solares y energías renovables^</li^>
echo         ^</ul^>
echo       ^</section^>
echo     ^</>
echo   );
echo }
) > frontend\src\pages\Services.jsx

:: About.jsx
(
echo import Seo from '../components/Seo';
echo 
echo export default function About() {
echo   return (
echo     ^<>
echo       ^<Seo title="Sobre Delta Tecnologías" /^>
echo       ^<section style={{ padding: '2rem' }}^>
echo         ^<h2^>Sobre nosotros^</h2^>
echo         ^<p^>Delta Tecnologías es una empresa dedicada a brindar soluciones integrales en electricidad, seguridad y energías limpias desde hace más de 10 años.^</p^>
echo       ^</section^>
echo     ^</>
echo   );
echo }
) > frontend\src\pages\About.jsx

:: Contact.jsx
(
echo import axios from 'axios';
echo import Seo from '../components/Seo';
echo 
echo export default function Contacto() {
echo   const handleSubmit = async (e) => {
echo     e.preventDefault();
echo     const data = new FormData(e.target);
echo     try {
echo       await axios.post('http://localhost:5000/api/contacto', Object.fromEntries(data));
echo       alert('Gracias por tu mensaje');
echo     } catch (error) {
echo       alert('Hubo un error al enviar el mensaje');
echo     }
echo   };
echo 
echo   return (
echo     ^<>
echo       ^<Seo title="Contáctanos | Delta Tecnologías" /^>
echo       ^<form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem auto' }}^>
echo         ^<input type="text" name="nombre" placeholder="Nombre" required style={{ display: 'block', width: '100%%', marginBottom: '1rem', padding: '0.5rem' }} /^>
echo         ^<input type="email" name="email" placeholder="Email" required style={{ display: 'block', width: '100%%', marginBottom: '1rem', padding: '0.5rem' }} /^>
echo         ^<input type="tel" name="telefono" placeholder="Teléfono" style={{ display: 'block', width: '100%%', marginBottom: '1rem', padding: '0.5rem' }} /^>
echo         ^<textarea name="mensaje" placeholder="Tu mensaje..." required style={{ display: 'block', width: '100%%', marginBottom: '1rem', padding: '0.5rem' }}^><\/textarea^>
echo         ^<button type="submit" style={{ backgroundColor: '#002244', color: 'white', padding: '0.5rem 1rem' }}^>Enviar^</button^>
echo       ^</form^>
echo     ^</>
echo   );
echo }
) > frontend\src\pages\Contact.jsx
