import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/Logo_delta_nuevo.jpg"
            alt="Delta Tecnologías Logo"
            className="h-10 w-auto"
          />
        </Link>
        <nav
        className={`bg-[#002244] text-white px-4 py-3 ml-10 lg:flex ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col  ml-10 lg:flex-row gap-10 lg:gap-6">
          <Link to="/" className="hover:underline" ml-10 >Inicio</Link>
          <Link to="/servicios" className="hover:underline" ml-10>Servicios</Link>
          <Link to="/sobre-nosotros" className="hover:underline" ml-10>Sobre Nosotros</Link>
          <Link to="/contacto" className="hover:underline" ml-10>Contáctanos</Link>
        </div>
      </nav>

        {/* Botón de hamburguesa: solo visible en pantallas pequeñas */}
        {/* <button
          className="lg:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
        
      </div>

      {/* Navbar principal */}
      
    </header>
  );
}
