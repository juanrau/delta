// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/main.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
// ¡Elimina esta línea!
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/index.css'

export default function App() {
  return (
    <Router>
      <Header /> {/* Solo renderizamos el Header, que ya contiene la navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer /> {/* ¡Renderiza el componente Footer aquí! */}
    </Router>
  );
}