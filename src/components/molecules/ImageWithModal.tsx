import { useState } from "react";
import Modal from "../atoms/Modal";
import Image from "../atoms/Image";

interface ImageWithModalProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders an image that opens in a modal when clicked.
 * Used for displaying images in a larger view.
 */
const ImageWithModal = ({ src, alt, className = "" }: ImageWithModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`group focus:outline-none ${className}`}
        aria-label={`Open image modal: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          className="w-full object-cover rounded cursor-pointer transition duration-300 ease-in-out 
                     group-hover:shadow-[0_0_15px_white] 
                     group-focus:shadow-[0_0_15px_white] 
                     group-focus:scale-[1.02]"
        />
      </button>

      {isOpen && (
        <Modal imageSrc={src} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};


export default ImageWithModal;
