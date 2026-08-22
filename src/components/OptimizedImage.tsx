import React, { useState } from 'react';

interface ImageAsset {
  src: string;
  mobileSrc?: string;
  fallback?: string;
  placeholder?: string;
  alt: string;
}

interface OptimizedImageProps {
  image: ImageAsset;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  image,
  className = '',
  imgClassName = '',
  priority = false,
  aspectRatio,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Instant low-res blur-up placeholder */}
      {image.placeholder && (
        <img
          src={image.placeholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover filter blur-lg scale-105 pointer-events-none transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Full-resolution responsive picture */}
      <picture>
        {image.mobileSrc && (
          <source
            media="(max-width: 768px)"
            srcSet={image.mobileSrc}
            type="image/webp"
          />
        )}
        <source srcSet={image.src} type="image/webp" />
        <img
          src={image.fallback || image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
          } ${imgClassName}`}
        />
      </picture>
    </div>
  );
};
