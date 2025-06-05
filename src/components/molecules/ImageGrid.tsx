import ImageWithModal from "../atoms/ImageWithModal";

interface ImageData {
  src: string;
  alt: string;
  className: string;
}

interface ImageGroup {
  groupClass: string;
  images: ImageData[];
}

interface ImageGridProps {
  data: ImageGroup[];
}

const ImageGrid = ({ data }: ImageGridProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 flex-1">
      {data.map((group, i) => (
        <div key={i} className={group.groupClass}>
          {group.images.map((img, j) => (
            <ImageWithModal
              key={j}
              src={img.src}
              alt={img.alt}
              className={img.className}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
