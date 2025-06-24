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
      image: "/image-uploads/sitting1.png",
      description: "Exquisitely carved sitting mandir featuring intricate lotus motifs and traditional Indian architectural elements.",
      features: ["Hand-carved lotus details", "Compact design", "Premium wood finish", "Storage compartments"]
    },
    {
      id: 2,
      name: "Royal Heritage Style",
      image: "/image-uploads/sitting2.webp",
      description: "Ornate sitting mandir with elaborate carvings and royal design elements perfect for home worship.",
      features: ["Royal architectural design", "Intricate panel work", "Multiple deity spaces", "Traditional motifs"]
    },
    {
      id: 3,
      name: "Classic Temple Gate",
      image: "/image-uploads/sitting3.webp",
      description: "Beautiful sitting mandir with temple gate design and artistic fan patterns in the doors. Perfect blend of traditional architecture and modern home aesthetics.",
      features: ["Temple gate architecture", "Fan pattern doors", "Elegant proportions", "Sacred geometry"]
    },
    {
  id: 4,
  name: "Compact Sheesham Shrine",
  image: "/image-uploads/sitting4.webp",
  description: "Premium sheesham wood sitting mandir with minimalist design perfect for modern apartments and small spaces.",
  features: ["Sheesham wood construction", "Minimalist design", "Space-efficient", "Easy assembly"]
},
{
  id: 5,
  name: "Ornate Jharokha Style",
  image: "/image-uploads/sitting5.webp",
  description: "Rajasthani jharokha-inspired sitting mandir with intricate window patterns and traditional carved details.",
  features: ["Jharokha window design", "Rajasthani patterns", "Detailed carvings", "Authentic craftsmanship"]
},
{
  id: 6,
  name: "Corner Compact Temple",
  image: "/image-uploads/sitting6.webp",
  description: "Triangular corner-fit sitting mandir designed specifically for corner placement with maximum space utilization.",
  features: ["Corner-fit design", "Space optimization", "Triangular structure", "Multi-tier storage"]
},
{
  id: 7,
  name: "Modern Teak Sanctuary",
  image: "/image-uploads/sitting7.jpg",
  description: "Contemporary teak wood sitting mandir blending modern aesthetics with traditional spiritual elements.",
  features: ["Premium teak wood", "Modern design", "Clean lines", "Contemporary finish"]
},
{
  id: 8,
  name: "Peacock Motif Shrine",
  image: "/image-uploads/sitting7.webp",
  description: "Artistic sitting mandir featuring beautiful peacock carvings and traditional Indian motifs in compact form.",
  features: ["Peacock carvings", "Artistic details", "Traditional motifs", "Compact elegance"]
},
{
  id: 9,
  name: "Drawer Storage Temple",
  image: "/image-uploads/sitting9.webp",
  description: "Functional sitting mandir with integrated drawer storage for pooja essentials and religious items.",
  features: ["Built-in drawers", "Storage solutions", "Functional design", "Organized worship space"]
},
{
  id: 10,
  name: "Wall Mount Sacred Space",
  image: "/image-uploads/e181d89e-5338-4ba2-9114-cb0a46dcba9a.jpg",
  description: "Space-saving wall-mounted sitting mandir perfect for studios and compact living spaces.",
  features: ["Wall-mountable", "Space-saving design", "Compact profile", "Easy installation"]
}
  ];

  const standingMandirs = [
    {
      id: 11,
      name: "Majestic Temple Arch",
      image: "/image-uploads/84e8a245-f868-46d5-967b-4f517025ada9.jpg",
      description: "Grand standing mandir with magnificent arch design and detailed carved pillars for spacious homes.",
      features: ["Magnificent arch design", "Carved pillars", "Grand presence", "Multiple levels"]
    },
    {
      id: 12,
      name: "Divine Peacock Mandir",
      image: "/image-uploads/771cb90d-f2a2-4409-a50a-aa0c2bd73968.jpg",
      description: "Stunning standing mandir featuring peacock motifs and traditional temple architecture elements.",
      features: ["Peacock carved details", "Temple spires", "Ornate craftsmanship", "Spiritual symbolism"]
    },
    {
      id: 13,
      name: "Sacred Pavilion Style",
      image: "/image-uploads/sitt-1.png",
      description: "Elaborate standing mandir with pavilion-style architecture and intricate carved decorations.",
      features: ["Pavilion architecture", "Intricate carvings", "Multi-tiered design", "Premium craftsmanship"]
    },
    {
  id: 14,
  name: "Gopuram Temple Tower",
  image: "/image-uploads/9b67dfb6-d366-47b1-a1c6-316c31a69392.jpg",
  description: "South Indian gopuram-style standing mandir with pyramid roof and traditional temple architecture.",
  features: ["Gopuram tower design", "Pyramid roof structure", "South Indian style", "Temple architecture"]
},
{
  id: 15,
  name: "Maharaja Palace Temple",
  image: "/image-uploads/1daac06f-69d5-4a3f-98de-0742ec2b59c5.jpg",
  description: "Royal palace-inspired standing mandir with elaborate carvings and multiple chambers for different deities.",
  features: ["Palace-inspired design", "Multiple chambers", "Elaborate carvings", "Royal aesthetics"]
},
{
  id: 16,
  name: "Tirupati Style Sanctuary",
  image: "/image-uploads/0d753740-5b3d-4a80-88df-0ab39ea61d9e.jpg",
  description: "Traditional Tirupati temple-inspired standing mandir with authentic architectural elements and golden accents.",
  features: ["Tirupati temple style", "Golden accents", "Authentic architecture", "Traditional elements"]
},
{
  id: 17,
  name: "Grand Sheesham Cathedral",
  image: "/image-uploads/a2c44066-dc90-4c15-a713-438aff60cb8b.jpg",
  description: "Imposing sheesham wood standing mandir with cathedral-like proportions and intricate carved panels.",
  features: ["Cathedral proportions", "Sheesham wood", "Carved panels", "Imposing presence"]
},
{
  id: 18,
  name: "Multi-Deity Tower Temple",
  image: "/image-uploads/5a559d00-afb2-429e-96e6-a68d940f75c9.jpg",
  description: "Spacious standing mandir with multiple levels and compartments designed for housing various deities.",
  features: ["Multiple levels", "Various deity spaces", "Tower design", "Spacious interior"]
},
{
  id: 19,
  name: "Ornate Haveli Style",
  image: "/image-uploads/c269f4e6-ac8a-4f9b-8706-6ba84afb600d.jpg",
  description: "Rajasthani haveli-inspired standing mandir with jharokhas, carved balconies, and traditional motifs.",
  features: ["Haveli architecture", "Jharokha balconies", "Traditional motifs", "Rajasthani style"]
},
{
  id: 20,
  name: "Imperial Teak Masterpiece",
  image: "/image-uploads/8d100f55-eccc-4569-bf2a-cc059231a5bf.jpg",
  description: "Premium teak wood standing mandir with imperial design, gold leaf details, and museum-quality craftsmanship.",
  features: ["Premium teak construction", "Gold leaf details", "Imperial design", "Museum-quality craft"]
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
