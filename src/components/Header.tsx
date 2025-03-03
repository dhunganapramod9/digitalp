import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">
            <a href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              Pramod Dhungana
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#experience" className="text-gray-300 hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-accent transition-colors">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-accent transition-colors">More of Me</a>
            <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#experience" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Experience</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Projects</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">More of Me</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;