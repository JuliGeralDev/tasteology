import axios from "axios";
import type { Section } from "../types/section";

/**
 * Fetches sections data from a local JSON file.
 * 
 * @returns {Promise<Section[]>} A promise that resolves to an array of sections.
 */
export const getSections = async (): Promise<Section[]> => {
  try {
    const response = await axios.get<Section[]>("/data/Sections.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
    return [];
  }
};
