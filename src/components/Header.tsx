import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../Assets/technova.png'; // Import the logo image

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-950 dark:bg-darkBackground text-white dark:text-gray-200 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        
        
        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <ThemeToggle />
        
        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✖️' : '☰'} {/* Toggle icon */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="fixed top-0 right-0 w-2/3 bg-blue-600 dark:bg-darkBackground h-full shadow-lg transition-transform transform translate-x-0">
          <div className="flex items-center justify-center p-4">
            {/* <img 
              src={logo} // Include the logo in the mobile menu
              alt="Company Logo" 
              className="w-24 h-24" // Adjust size for the logo in the menu
            /> */}
          </div>
          <ul className="flex flex-col space-y-4 mt-4 p-5">
            <li><Link to="/" className="hover:text-gray-300" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-300" onClick={closeMobileMenu}>Services</Link></li>
            <li><Link to="/about" className="hover:text-gray-300" onClick={closeMobileMenu}>About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
