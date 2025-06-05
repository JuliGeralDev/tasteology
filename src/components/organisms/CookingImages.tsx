import { useState } from "react";
import Modal from "../atoms/Modal";
import ImageGrid from "../molecules/ImageGrid";

const cookingImagesData = [
  {
    groupClass: "flex-1",
    images: [
      {
        src: "/assets/pot.png",
        alt: "Cooking pot",
        className: "w-full h-full object-cover",
      },
    ],
  },
  {
    groupClass: "flex flex-col gap-4 flex-1",
    images: [
      {
        src: "/assets/chef.png",
        alt: "Chef planning",
        className: "w-full object-cover",
      },
      {
        src: "/assets/eggs.png",
        alt: "Eggs cooked",
        className: "w-full object-cover",
      },
    ],
  },
];

const CookingImages = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <ImageGrid data={cookingImagesData} onImageClick={setSelectedImage} />
      {selectedImage && (
        <Modal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
};

export default CookingImages;
