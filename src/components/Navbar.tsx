import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/ui/logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    setIsOpen(false); // Close mobile menu
    
    if (location.pathname === '/') {
      // We're on home page, just scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page, navigate to home first
      if (section === 'home') {
        navigate('/');
      } else {
        navigate('/');
        // Small delay to ensure navigation completes before scrolling
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg pb-2">
              <Logo />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-gradient">Mandir Murti</h1>
              <p className="text-sm text-muted-foreground">Authentic Temple Craftsmanship</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('sitting')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Sitting Mandirs
            </button>
            <button 
              onClick={() => handleNavClick('standing')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Standing Mandirs
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
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
              <button 
                onClick={() => handleNavClick('home')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('sitting')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors font-medium"
              >
                Sitting Mandirs
              </button>
              <button 
                onClick={() => handleNavClick('standing')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors font-medium"
              >
                Standing Mandirs
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-gold transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="block w-full mx-3 my-2 bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;