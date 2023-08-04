import lodgins from "../../config/data/Lodgins.json";

export function getById(id: string | undefined) {
  try {
    if (id) {
      const currentHome = lodgins.filter(lodgin => lodgin.id === parseInt(id));
      if (currentHome.length > 0) {
        return currentHome[0];
      } else {
        console.error("No home found with the provided ID");
      }
    } else {
      console.error("Undefined ID provided");
    }
  } catch (error) {
    console.error("An error occurred while getting home by ID:", error);
  }
}