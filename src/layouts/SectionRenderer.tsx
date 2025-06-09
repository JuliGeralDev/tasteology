import { useEffect, useState } from "react";
import { SectionContext } from "../context/SectionContext";
import useGetSection from "../hooks/useGetSection";
import CookingSection from "../features/cookingSection/CookingSection";
import TasteSection from "../features/TasteSection/TasteSection";


const SectionRenderer = () => {
  const sections = useGetSection(); 
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (sections && sections.length > 0) {
      setIsLoading(false);
    }
  }, [sections]);

  if (isLoading) {
    return null; 
  }

  return (
    <>
      {sections.map((section) => {
        const type = section.type;

        let Component = null;
        switch (type) {
          case "image-grid":
            Component = <CookingSection />;
            break;
          case "card-grid":
            Component = <TasteSection />;
            break;
          default:
            return null;
        }

        return (
          <SectionContext.Provider value={section} key={section.id}>
            <section
              className="p-4 sm:p-6 md:p-20 lg:p-20 xl:p-[12rem]"
            >
              {Component}
            </section>
          </SectionContext.Provider>
        );
      })}
    </>
  );
};

export default SectionRenderer;
