
import React from 'react';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '25+' },
    { icon: Users, label: 'Happy Families', value: '500+' },
    { icon: Heart, label: 'Handcrafted Pieces', value: '1000+' },
    { icon: Sparkles, label: 'Master Artisans', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Preserving Sacred Traditions
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over two decades, our master craftsmen have been creating exquisite wooden mandirs 
              that bring the divine presence into American homes. Each piece is meticulously hand-carved 
              using traditional techniques passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand the importance of creating a sacred space that reflects your spiritual journey. 
              Our mandirs are not just furniture—they are gateways to the divine, crafted with devotion 
              and blessed with positive intentions.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Premium seasoned wood selection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Traditional joinery techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Intricate hand-carved details</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Spiritual blessing ceremonies</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-gold/20 rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-gold" size={24} />
                  </div>
                  <div className="text-3xl font-playfair font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-gold/10 to-wood/10 rounded-xl p-6 border border-gold/20">
              <blockquote className="text-center">
                <p className="text-lg italic text-foreground mb-4">
                  "Every mandir we create carries the blessings of our ancestors and the hopes 
                  of families seeking divine connection in their daily lives."
                </p>
                <footer className="text-gold font-medium">— Master Craftsman</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
