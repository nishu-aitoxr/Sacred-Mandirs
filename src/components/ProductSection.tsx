import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

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

  const handleViewDetails = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="hover-lift bg-card border-gold/20 overflow-hidden animate-scale-in group cursor-pointer"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-[30rem] overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
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
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;