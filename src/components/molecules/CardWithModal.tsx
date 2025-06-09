import Modal from "../atoms/Modal";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Image from "../atoms/Image";

interface ModalCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
  onClose: () => void;
}

const ModalCard = ({ image, title, text, onClose }: ModalCardProps) => {
  return (
    <Modal onClose={onClose}>
      <Image
        src={image.src}
        alt={image.alt}
        className="rounded mb-4 w-full max-h-80 object-cover"
      />
      <Title variant="main" as="h3">
        {title}
      </Title>
      <Paragraph>{text}</Paragraph>

      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-accent underline hover:text-white"
      >
        View full image
      </a>
    </Modal>
  );
};

export default ModalCard;
