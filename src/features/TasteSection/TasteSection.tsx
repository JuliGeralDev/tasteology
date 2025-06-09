import { motion } from "framer-motion";
import { useSection } from "../../context/SectionContext";
import Title from "../../components/atoms/Title";
import Card from "../../components/molecules/Card";

const TasteSection = () => {
  const section = useSection();
  const { title, components } = section;

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}

    >
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
    </motion.div>
  );
};

export default TasteSection;
