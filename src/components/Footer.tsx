
import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">🕉</span>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-gold">Mandir Murti</h3>
                <p className="text-sm text-primary-foreground/80">Authentic Temple Craftsmanship</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Bringing divine presence and traditional Indian craftsmanship to American homes 
              through our handcrafted wooden mandirs. Each piece is created with devotion and 
              blessed with positive intentions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold text-xl">f</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold text-xl">i</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors cursor-pointer">
                <span className="text-gold text-xl">@</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/90 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#sitting" className="text-primary-foreground/90 hover:text-gold transition-colors">Sitting Mandirs</a></li>
              <li><a href="#standing" className="text-primary-foreground/90 hover:text-gold transition-colors">Standing Mandirs</a></li>
              <li><a href="#about" className="text-primary-foreground/90 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/90 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span className="text-primary-foreground/90">+61 406305555</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <span className="text-primary-foreground/90">abhimistry907@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold" />
                <span className="text-primary-foreground/90">Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Sacred Mandirs. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center space-x-1 mt-2 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-gold" />
            <span>for spiritual homes</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
