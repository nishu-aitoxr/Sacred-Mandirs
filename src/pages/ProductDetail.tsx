import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  price?: string;
  dimensions?: string;
  material?: string;
  craftTime?: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // All products data - make sure this matches your ProductSection data
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Traditional Lotus Design",
      image: "/image-uploads/205eeba3-2a6c-4dbd-9280-1ebcdff8a94a.png",
      description: "Exquisitely carved sitting mandir featuring intricate lotus motifs and traditional Indian architectural elements. This beautiful piece brings divine presence to your home with its compact yet elegant design.",
      features: ["Hand-carved lotus details", "Compact design", "Premium wood finish", "Storage compartments"],
      price: "$899",
      dimensions: "24\" W x 16\" D x 28\" H",
      material: "Premium Sheesham Wood",
      craftTime: "45-60 days"
    },
    {
      id: 2,
      name: "Royal Heritage Style",
      image: "/image-uploads/5715fadf-57a0-43fd-b629-0f5184c3e3ff.png",
      description: "Ornate sitting mandir with elaborate carvings and royal design elements perfect for home worship. Features multiple compartments for deities and prayer items.",
      features: ["Royal architectural design", "Intricate panel work", "Multiple deity spaces", "Traditional motifs"],
      price: "$1,299",
      dimensions: "30\" W x 18\" D x 32\" H",
      material: "Premium Teak Wood",
      craftTime: "60-75 days"
    },
    {
      id: 3,
      name: "Classic Temple Gate",
      image: "/image-uploads/69c309ba-422f-48b8-8eef-50ad1f132fa3.png",
      description: "Beautiful sitting mandir with temple gate design and artistic fan patterns in the doors. Perfect blend of traditional architecture and modern home aesthetics.",
      features: ["Temple gate architecture", "Fan pattern doors", "Elegant proportions", "Sacred geometry"],
      price: "$1,099",
      dimensions: "28\" W x 17\" D x 30\" H",
      material: "Premium Rosewood",
      craftTime: "50-65 days"
    },
    {
      id: 4,
      name: "Majestic Temple Arch",
      image: "/image-uploads/1ec2ee4d-d097-4040-81f6-e4b370fa0a09.png",
      description: "Grand standing mandir with magnificent arch design and detailed carved pillars for spacious homes. Creates a stunning focal point in any room.",
      features: ["Magnificent arch design", "Carved pillars", "Grand presence", "Multiple levels"],
      price: "$2,499",
      dimensions: "42\" W x 24\" D x 72\" H",
      material: "Premium Sheesham Wood",
      craftTime: "90-120 days"
    },
    {
      id: 5,
      name: "Divine Peacock Mandir",
      image: "/image-uploads/c4cad928-dc1b-411c-b4e3-4df438279555.png",
      description: "Stunning standing mandir featuring peacock motifs and traditional temple architecture elements. Symbolizes beauty, grace, and spiritual awakening.",
      features: ["Peacock carved details", "Temple spires", "Ornate craftsmanship", "Spiritual symbolism"],
      price: "$2,899",
      dimensions: "48\" W x 26\" D x 78\" H",
      material: "Premium Teak Wood",
      craftTime: "100-130 days"
    },
    {
      id: 6,
      name: "Sacred Pavilion Style",
      image: "/image-uploads/460e06a0-059f-47a3-86a6-b1365a69a569.png",
      description: "Elaborate standing mandir with pavilion-style architecture and intricate carved decorations. A masterpiece of traditional Indian craftsmanship.",
      features: ["Pavilion architecture", "Intricate carvings", "Multi-tiered design", "Premium craftsmanship"],
      price: "$3,299",
      dimensions: "52\" W x 28\" D x 84\" H",
      material: "Premium Rosewood",
      craftTime: "120-150 days"
    }
  ];

  // Convert id to number and find the product
  const productId = id ? parseInt(id, 10) : 0;
  const product = allProducts.find(p => p.id === productId);

  // Debug logging (remove in production)
  console.log('URL ID:', id);
  console.log('Parsed ID:', productId);
  console.log('Found Product:', product);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-playfair font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">The product with ID {id} could not be found.</p>
          <Button onClick={() => navigate('/')} className="bg-gold hover:bg-gold/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-card shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  console.error('Image failed to load:', product.image);
                  e.currentTarget.src = '/placeholder-image.jpg'; // Fallback image
                }}
              />
            </div>
            {/* Additional thumbnail images could go here */}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-playfair font-bold mb-4 text-gradient">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-muted-foreground">(Handcrafted Excellence)</span>
              </div>
              {product.price && (
                <p className="text-3xl font-bold text-gold mb-6">{product.price}</p>
              )}
              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <Card className="border-gold/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></span>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-gold/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  {product.dimensions && (
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span className="text-foreground font-medium">{product.dimensions}</span>
                    </div>
                  )}
                  {product.material && (
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="text-foreground font-medium">{product.material}</span>
                    </div>
                  )}
                  {product.craftTime && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Craft Time:</span>
                      <span className="text-foreground font-medium">{product.craftTime}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Authentic</p>
                <p className="text-xs text-muted-foreground">Handcrafted</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                <Truck className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Nationwide</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Custom Made</p>
                <p className="text-xs text-muted-foreground">To Order</p>
              </div>
            </div>

            {/* Contact Button */}
            <Button 
              className="w-full bg-gold hover:bg-gold/90 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/#contact')}
            >
              Contact Us for Pricing & Details
            </Button>
          </div>
        </div>

        {/* Related Products Section (Optional) */}
        <div className="mt-20">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-gradient">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProducts
              .filter(p => p.id !== productId)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card 
                  key={relatedProduct.id}
                  className="hover-lift bg-card border-gold/20 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-playfair font-semibold mb-2">{relatedProduct.name}</h3>
                    {relatedProduct.price && (
                      <p className="text-gold font-bold">{relatedProduct.price}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;