import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed z-10 w-full bg-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="container flex items-center justify-between px-10 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">Puja Patha</div>
        
        {/* Desktop Menu */}
        <nav className="hidden space-x-6 md:flex">
          <a href="#" className="text-gray-700 hover:text-red-500">Home</a>
          <a href="#services" className="text-gray-700 hover:text-red-500">Services</a>
          <a href="#about" className="text-gray-700 hover:text-red-500">About</a>
          <a href="#contact" className="text-gray-700 hover:text-red-500">Contact</a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          className="text-gray-700 md:hidden focus:outline-none"
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
        <div className="px-6 py-4 bg-white shadow-md md:hidden">
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
