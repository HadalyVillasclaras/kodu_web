import lodgins from "../../config/data/Lodgins.json"

export function getById(id: string | undefined) {
  //try catch
  const currentHome = lodgins.filter(lodgin => lodgin.id === parseInt(id));
  if (currentHome) return currentHome[0];
}
