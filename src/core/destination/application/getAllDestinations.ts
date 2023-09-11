import destinations from "../../data/Destinations.json";

export function getAllDestinations() {
  try {
    if (destinations && destinations.length > 0) {
      return destinations;
    } else {
      console.error("No destinationgs found");
      return [];
    }
  } catch (error) {
    console.error("An error occurred while getting all destinations:", error);
    return [];
  }
}
