import { Quarter } from "../core/common/quarters/domain/Quarter";
import { getQuartersByIds } from "../core/common/quarters/services/getQuartersByIds";
import destinationData from "../core/data/Destinations.json";

export const useAvailability = () => {
  const checkAvailabilityByDestination = (destinationId: string): Quarter[] => {
    const destination = destinationData.find((dest) => dest.id.toString() === destinationId);
    const availableQuarterIds = destination?.availability || [];

    const availableQuarters = getQuartersByIds(availableQuarterIds);

    return availableQuarters;
  };

  const checkAvailabilityByQuarter = (quarterId: string): string[] => {
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