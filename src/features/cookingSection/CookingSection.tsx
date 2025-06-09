import { useSection } from "../../context/SectionContext";
import CookingImages from "../../components/organisms/CookingImages";
import CookingText from "../../components/organisms/CookingText";
import { motion } from "framer-motion";

const CookingSection = () => {
  const section = useSection();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
      <motion.div
        className="lg:col-span-2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CookingImages images={section?.images} />
      </motion.div>

      <motion.div
        className="lg:col-span-1"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <CookingText />
      </motion.div>
    </div>
  );
};
export default CookingSection;
