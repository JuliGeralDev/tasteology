import { useEffect, useState } from "react";
import { getSections } from "../services/contentService";
import type { Section } from "../types";

const useGetSection = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    getSections().then((data) => {
      const sorted = data.sort((a, b) => a.position - b.position);
      
      setTimeout(() => {
        setSections(sorted);
      }, 1500);
    });
  }, []);

  return sections;
};

export default useGetSection;
