import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";

const CookingText = () => (
  <div className="flex flex-col justify-center flex-1">
    <Title variant="main">What does cooking mean?</Title>
    <Paragraph variant="normal">
      Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...
    </Paragraph>
    <Title variant="caption">THE PERFECT EGG</Title>
    <Paragraph variant="bold">
      Keep water between 67 and 68°C <br />
      for a flavourful, tender yolk
    </Paragraph>
  </div>
);

export default CookingText;
