import { useSection } from "../../context/SectionContext";
import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";

const TasteSection = () => {
  const section = useSection();
  const { title, components } = section;
  return (
    <>
      <div className="text-center">
        <Title variant="main" as="h2">
          {title}
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr w-full">
          {components.map((component, index) => (
            <Card
              key={index}
              image={component.image}
              title={component.title || ""}
              text={component.text || ""}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TasteSection;