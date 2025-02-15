/*import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">Revolucion.lk</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-secondary transition-colors">Solutions</a>
            <a href="#benefits" className="hover:text-secondary transition-colors">Benefits</a>
            <a href="#features" className="hover:text-secondary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-secondary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#solutions" className="hover:text-secondary transition-colors">Solutions</a>
              <a href="#benefits" className="hover:text-secondary transition-colors">Benefits</a>
              <a href="#features" className="hover:text-secondary transition-colors">Features</a>
              <a href="#pricing" className="hover:text-secondary transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}*/


import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react'; // Import necessary icons
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full glass-effect header-nav">
      <div className="container mx-auto px-4 py-4 mt-0 mb-0">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
            <div className="flex items-center space-x-2 pl-10">
              {/* Replace Bot icon with an image logo */}
              <img 
                src="/assets/images/Logo.png" // Replace with the actual path to your logo image
                alt="Revolucion.lk Logo" 
                className="h-30 w-40 mt-0 mb-0" // Increased height and width
              />
            </div>
          {/* Hamburger Menu Button (Visible on All Screens) */}
          <button
            className="p-2 focus:outline-none mr-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary" /> // Close icon
            ) : (
              <Menu className="h-6 w-6 text-secondary" /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Dropdown (Visible when Hamburger is clicked) */}
        {isMenuOpen && (
          <nav className="mt-4">
            <div className="flex flex-col space-y-4 bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <a href="#solutions" className="hover:text-secondary transition-colors">Solutions</a>
              <a href="#benefits" className="hover:text-secondary transition-colors">Benefits</a>
              <a href="#features" className="hover:text-secondary transition-colors">Features</a>
              <a href="#pricing" className="hover:text-secondary transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
              <Link 
                to="/dashboard" 
                className="bg-secondary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
    
  );
}