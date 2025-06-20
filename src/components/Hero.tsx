
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-auto flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-gold-light/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 mandala-pattern"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold border border-gold/20 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Handcrafted Sacred Spaces</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Sacred <span className="text-gradient">Mandirs</span>
            <br />
            for Your Home
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Authentic hand-carved wooden temples bringing divine presence
            <br />
            and traditional craftsmanship to Australia homes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="#sitting"
              className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2 group"
            >
              <span>Explore Our Collection</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              Custom Orders
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Authentic Craftsmanship</h3>
              <p className="text-muted-foreground">Traditional techniques passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Perfect for Australia Homes</h3>
              <p className="text-muted-foreground">Designed to complement modern living spaces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Sacred Materials</h3>
              <p className="text-muted-foreground">Premium wood selected for spiritual significance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
