import type { Image } from "../../types";
import ImageWithModal from "../atoms/ImageWithModal";

interface Props {
  images: Image[];
}

const CookingImages = ( { images }: Props ) => {
 const grouped = [
    {
      groupClass: "flex-1",
      images: [images[0]],
    },
    {
      groupClass: "flex flex-col gap-4 flex-1",
      images: [images[1], images[2]],
    },
  ];

  return (
    <div className="flex flex-col flex-row gap-4 flex-1">
      {grouped.map((group, i) => (
        <div key={i} className={group.groupClass}>
          {group.images.map((img, j) => (
            <ImageWithModal
              key={j}
              src={img?.src}
              alt={img?.alt}
              className="w-full object-cover"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CookingImages;
