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
  onImageClick: (src: string) => void;
}

const ImageGrid = ({ data, onImageClick }: ImageGridProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 flex-1">
      {data.map((group, i) => (
        <div key={i} className={group.groupClass}>
          {group.images.map((img, j) => (
            <img
              key={j}
              src={img.src}
              alt={img.alt}
              className={`${img.className} cursor-pointer transition duration-300 ease-in-out hover:shadow-[0_0_15px_white]`}
              onClick={() => onImageClick(img.src)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
