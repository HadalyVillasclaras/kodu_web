import destinationData from "../core/data/Destinations.json";

export const useAvailability = () => {
  const checkAvailabilityByDestination = (destinationId: string) => {
    const destination = destinationData.find((dest) => dest.id.toString() === destinationId);
    return destination?.availability || [];
  };

  const checkAvailabilityByQuarter = (quarterId: string) => {
    const destinationsAvailable: string[]= [];

    destinationData.map((dest) => {
      if (dest.availability.includes(quarterId)) {
        destinationsAvailable.push(dest.name);
      }
    })

    return destinationsAvailable;
  };

  return { checkAvailabilityByDestination, checkAvailabilityByQuarter };
};