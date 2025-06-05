import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import ImageWithModal from "../atoms/ImageWithModal";

const Card = () => {
  return (
    <div className="card p-4 bg-dark rounded">
      <ImageWithModal
        src="/assets/red.png"
        alt="Red"
        className="w-full h-auto rounded"
      />
      <Title variant="normal">Card Title</Title>
      <Paragraph>This is a simple card component.</Paragraph>
    </div>
  );
}

export default Card;