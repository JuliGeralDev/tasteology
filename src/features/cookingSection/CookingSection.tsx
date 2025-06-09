import CookingImages from "../../components/organisms/CookingImages";
import CookingText from "../../components/organisms/CookingText";
import type { Section } from "../../types"

const CookingSection = ({ section }: { section: Section} ) => {
  
  console.log("CookingSection", section)
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-[30px]">
      <div className="lg:col-span-2">
        <CookingImages images={section?.images} />
      </div>

      <div className="lg:col-span-1">
        <CookingText />
      </div>
    </div>
  );
};

export default CookingSection;
