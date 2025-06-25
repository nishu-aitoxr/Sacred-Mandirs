// components/ProductImage.tsx
import React from 'react';

interface ProductImageProps {
  image: string;
  name: string;
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, name, className }) => {
  return (
    <div className={`aspect-square overflow-hidden rounded-lg bg-card shadow-lg ${className}`}>
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          console.error('Image failed to load:', image);
          e.currentTarget.src = '/placeholder-image.jpg'; // fallback image
        }}
      />
    </div>
  );
};

export default ProductImage;
