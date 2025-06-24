import React, { useEffect, useState } from "react";

const images = [
  "/image-uploads/Banner-1.png",
  "/image-uploads/Banner-2.jpg",
  "/image-uploads/Banner-3.webp",
  "/image-uploads/Banner-4.jpg",
  "/image-uploads/Banner-2.jpg",
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30rem] bg-white flex items-center justify-center">
      {/* Background Image (one at a time) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={images[currentIndex]}
          alt="banner-background"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-black/10 z-[1]" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-xl sm:text-6xl font-serif font-light drop-shadow-md">
          With Great design comes great response
        </h1>
      </div>
    </div>
  );
};

export default Banner;
