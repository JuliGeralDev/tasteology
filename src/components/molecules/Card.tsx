import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import ImageWithModal from "../atoms/ImageWithModal";

interface CardProps {
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  title: string;
  text: string;
}

const Card = ({ image, title, text }: CardProps) => {
  return (
    <div className="bg-dark rounded p-4 flex flex-col h-full">
      <ImageWithModal
        src={image.src}
        alt={image.alt}
        className="w-full object-cover rounded mb-[30px]"
      />
      <Title variant="normal" as={"h2"}>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export default Card;
