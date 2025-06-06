import CookingImages from "../../components/organisms/CookingImages";
import CookingText from "../../components/organisms/CookingText";
import { getSections } from "../../services/contentService";
import type { Section } from "../../types"
import { useEffect, useState } from "react"

const CookingSection = () => {

  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    getSections().then(setSections);
  }, []);


   return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        <div className="lg:col-span-2">
          <CookingImages 
            images={sections.find(section => section.id === "cooking")?.images || []}
          />
        </div>
        <CookingText />
      </div>
    </section>
  );
};

export default CookingSection;
