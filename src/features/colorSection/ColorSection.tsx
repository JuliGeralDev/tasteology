import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";


const ColorSection = () => {
  return (
    <section className="text-center">
        <Title variant="main" as="h2">
            Taste the Colours
        </Title>

        <div className="flex flex-col lg:flex-row gap-4 flex-1">
          <Card />
          <Card />
          <Card />
        </div>

    </section>
  );
}

export default ColorSection;