import axios from "axios";
import type { Section } from "../types/Section";

export const getSections = async (): Promise<Section[]> => {
  try {
    const response = await axios.get<Section[]>("/data/Sections.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
    return [];
  }
};
