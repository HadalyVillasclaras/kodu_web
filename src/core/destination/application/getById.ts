import destinations from "../../data/Destinations.json";
import { Destination } from "../domain/Destination";
const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export function getById(id: string | undefined): Destination | undefined {
  try {
    if (id) {
      const currentDestination = destinations.filter(destination => destination.id === parseInt(id));
      if (currentDestination.length > 0) {
        const destination = currentDestination[0];
        const processedImages = destination.images.map(image => `${BASE_ASSETS}${image}`);
        return {
          ...destination,
          images: processedImages
        };
      } else {
        console.error("No destination found with the provided ID");
      }
    } else {
      console.error("Undefined ID provided");
    }
  } catch (error) {
    console.error("An error occurred while getting destination by ID:", error);
  }
}
