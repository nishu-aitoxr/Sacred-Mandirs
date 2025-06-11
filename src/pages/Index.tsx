import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const sittingMandirs = [
    {
      id: 1,
      name: "Traditional Lotus Design",
      image: "/image-uploads/205eeba3-2a6c-4dbd-9280-1ebcdff8a94a.png",
      description: "Exquisitely carved sitting mandir featuring intricate lotus motifs and traditional Indian architectural elements.",
      features: ["Hand-carved lotus details", "Compact design", "Premium wood finish", "Storage compartments"]
    },
    {
      id: 2,
      name: "Royal Heritage Style",
      image: "/image-uploads/5715fadf-57a0-43fd-b629-0f5184c3e3ff.png",
      description: "Ornate sitting mandir with elaborate carvings and royal design elements perfect for home worship.",
      features: ["Royal architectural design", "Intricate panel work", "Multiple deity spaces", "Traditional motifs"]
    },
    {
      id: 3,
      name: "Classic Temple Gate",
      image: "/image-uploads/sitt-1.png",
      description: "Beautiful sitting mandir with temple gate design and artistic fan patterns in the doors. Perfect blend of traditional architecture and modern home aesthetics.",
      features: ["Temple gate architecture", "Fan pattern doors", "Elegant proportions", "Sacred geometry"]
    }
  ];

  const standingMandirs = [
    {
      id: 4,
      name: "Majestic Temple Arch",
      image: "/image-uploads/1ec2ee4d-d097-4040-81f6-e4b370fa0a09.png",
      description: "Grand standing mandir with magnificent arch design and detailed carved pillars for spacious homes.",
      features: ["Magnificent arch design", "Carved pillars", "Grand presence", "Multiple levels"]
    },
    {
      id: 5,
      name: "Divine Peacock Mandir",
      image: "/image-uploads/c4cad928-dc1b-411c-b4e3-4df438279555.png",
      description: "Stunning standing mandir featuring peacock motifs and traditional temple architecture elements.",
      features: ["Peacock carved details", "Temple spires", "Ornate craftsmanship", "Spiritual symbolism"]
    },
    {
      id: 6,
      name: "Sacred Pavilion Style",
      image: "/image-uploads/460e06a0-059f-47a3-86a6-b1365a69a569.png",
      description: "Elaborate standing mandir with pavilion-style architecture and intricate carved decorations.",
      features: ["Pavilion architecture", "Intricate carvings", "Multi-tiered design", "Premium craftsmanship"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductSection 
        id="sitting"
        title="Sitting Mandirs"
        subtitle="Perfect for apartments and smaller spaces, our sitting mandirs bring divine presence without overwhelming your room. Each piece is designed to fit seamlessly into modern American homes."
        products={sittingMandirs}
      />
      <ProductSection 
        id="standing"
        title="Standing Mandirs"
        subtitle="Majestic floor-standing temples that become the centerpiece of your home. These grand mandirs create a dedicated sacred space for larger homes and prayer rooms."
        products={standingMandirs}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;