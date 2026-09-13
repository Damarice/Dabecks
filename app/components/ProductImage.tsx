'use client';

interface ProductImageProps {
  src: string;
  alt: string;
  placeholder: string;
  className?: string;
}

export default function ProductImage({
  src,
  alt,
  placeholder,
  className = '',
}: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        (e.target as HTMLImageElement).src = `https://via.placeholder.com/480x400/f2f2f2/9a9a9a?text=${encodeURIComponent(placeholder)}`;
      }}
      className={className}
    />
  );
}
