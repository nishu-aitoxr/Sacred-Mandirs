
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-wood rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-playfair font-bold text-2xl pb-1">🕉</span>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-gradient">Sacred Mandirs</h1>
              <p className="text-sm text-muted-foreground">Authentic Temple Craftsmanship</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-gold transition-colors font-medium">Home</a>
            <a href="#sitting" className="text-foreground hover:text-gold transition-colors font-medium">Sitting Mandirs</a>
            <a href="#standing" className="text-foreground hover:text-gold transition-colors font-medium">Standing Mandirs</a>
            <a href="#about" className="text-foreground hover:text-gold transition-colors font-medium">About</a>
            <a href="#contact" className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-gold/20 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-gold transition-colors font-medium">Home</a>
              <a href="#sitting" className="block px-3 py-2 text-foreground hover:text-gold transition-colors font-medium">Sitting Mandirs</a>
              <a href="#standing" className="block px-3 py-2 text-foreground hover:text-gold transition-colors font-medium">Standing Mandirs</a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-gold transition-colors font-medium">About</a>
              <a href="#contact" className="block mx-3 my-2 bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




