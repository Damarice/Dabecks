'use client';

interface ProductImageProps {
  src: string;
  alt: string;
  placeholder: string;
  className?: string;
}

export default function ProductImage({ src, alt, placeholder, className = '' }: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        (e.target as HTMLImageElement).src = `https://via.placeholder.com/480x420?text=${encodeURIComponent(placeholder)}`;
      }}
      className={className}
    />
  );
}
