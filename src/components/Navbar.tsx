import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/ui/logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    setIsOpen(false); // Close menu if open
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
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
            <div className="hidden lg:flex items-center space-x-8">
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
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-foreground hover:text-gold transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-gold/20 shadow-2xl transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg pb-1">
                  <Logo />
                </div>
                <div>
                  <h2 className="text-lg font-playfair font-bold text-gradient">Mandir Murti</h2>
                  <p className="text-xs text-muted-foreground">Authentic Craftsmanship</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="text-foreground hover:text-gold transition-colors p-2 hover:bg-gold/10 rounded-lg"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="px-6 py-4 space-y-2">
              <button 
                onClick={() => handleNavClick('home')}
                className="flex items-center w-full text-left px-4 py-3 text-foreground hover:text-gold hover:bg-gold/10 transition-all duration-200 font-medium rounded-lg group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
              </button>
              
              <button 
                onClick={() => handleNavClick('sitting')}
                className="flex items-center w-full text-left px-4 py-3 text-foreground hover:text-gold hover:bg-gold/10 transition-all duration-200 font-medium rounded-lg group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Sitting Mandirs</span>
              </button>
              
              <button 
                onClick={() => handleNavClick('standing')}
                className="flex items-center w-full text-left px-4 py-3 text-foreground hover:text-gold hover:bg-gold/10 transition-all duration-200 font-medium rounded-lg group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Standing Mandirs</span>
              </button>
              
              <button 
                onClick={() => handleNavClick('about')}
                className="flex items-center w-full text-left px-4 py-3 text-foreground hover:text-gold hover:bg-gold/10 transition-all duration-200 font-medium rounded-lg group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">About</span>
              </button>
              
              <div className="pt-4">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-gold hover:bg-gold/90 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Contact Info (Optional) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gold/20 bg-gradient-to-t from-background/50">
              <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span className="text-sm">+61 406305555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span className="text-sm">abhimistry907@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .mobile-menu-container {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;