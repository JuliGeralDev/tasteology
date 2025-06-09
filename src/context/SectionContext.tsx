import { createContext, useContext } from "react";
import type { Section } from "../types";

export const SectionContext = createContext<Section | null>(null);

/**
 * Provides the current section's data to all child components, avoiding prop drilling.
 */
export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) throw new Error("useSection must be used within a SectionProvider");
  return context;
};
