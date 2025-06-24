import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  id: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle, products, id }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleViewDetails = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth / 3; // 3 cards in view
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-background to-secondary/20 relative">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="relative max-w-8xl  px-4 mx-6">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gold/90"
        >
          <ChevronLeft className="text-black" />
        </button>

        {/* Card Container */}
        <div
          ref={scrollRef}
          className="overflow-hidden"
        >
          <div className="flex transition-transform duration-300 ease-in-out">
            {products.map((product) => (
              <div
                key={product.id}
                className="lg:w-[33.33%] flex-shrink-0 lg:px-2 sm:px-10 box-border"
              >
                <Card className="bg-card border-gold/20 overflow-hidden group h-full cursor-pointer">
                  <div className="relative h-[40rem] sm:h-[70rem] overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <button 
                        onClick={() => handleViewDetails(product.id)}
                        className="w-full bg-gold hover:bg-gold/90 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-playfair font-semibold mb-2 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
                    <div className="space-y-1 text-sm">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 sm:mr-3 rounded-full shadow-md hover:bg-gold/90"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
