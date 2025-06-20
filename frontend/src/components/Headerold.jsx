import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/Logo_delta_nuevo.jpg"
            alt="Delta Tecnologías Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-800">Delta Tecnologías</span> */}
        </Link>

      </div>
      
    </header>
  );
}
