import { useState } from "react";
import Modal from "./Modal";

interface ImageWithModalProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithModal = ({ src, alt, className = "" }: ImageWithModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition duration-300 ease-in-out hover:shadow-[0_0_15px_white] ${className}`}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal imageSrc={src} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default ImageWithModal;
