import lodgins from "../../config/data/Lodgins.json";

export function getAll() {
  try {
    if (lodgins && lodgins.length > 0) {
      return lodgins;
    } else {
      console.error("No lodgings found");
      return [];
    }
  } catch (error) {
    console.error("An error occurred while getting all lodgings:", error);
    return [];
  }
}
