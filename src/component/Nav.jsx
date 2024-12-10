import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">Puja Patha</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-500">Home</a>
          <a href="#services" className="text-gray-700 hover:text-red-500">Services</a>
          <a href="#about" className="text-gray-700 hover:text-red-500">About</a>
          <a href="#contact" className="text-gray-700 hover:text-red-500">Contact</a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {/* Hamburger Icon */}
          <svg 
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <a href="#" className="block py-2 text-gray-700 hover:text-red-500">Home</a>
          <a href="#services" className="block py-2 text-gray-700 hover:text-red-500">Services</a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-red-500">About</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-red-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Nav;
