import { useState } from "react";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import ModalCard from "../atoms/CardWithModal";

interface CardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
}

const Card = ({ image, title, text }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="cursor-pointer transition duration-300 ease-in-out hover:shadow-[0_0_15px_white]"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-cover rounded mb-[30px]"
        />
        <Title variant="normal" as="h2">
          {title}
        </Title>
        <Paragraph>{text}</Paragraph>
      </a>

      {isOpen && (
        <ModalCard
          image={image}
          title={title}
          text={text}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Card;
