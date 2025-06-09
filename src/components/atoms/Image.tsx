interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const Image = ({ src, alt, className = "", loading = "lazy" }: ImageProps) => {
  const base = src.replace(/\.(png|jpg|jpeg|webp)$/, "");

  return (
    <picture>
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
      />
    </picture>
  );
};

export default Image;
