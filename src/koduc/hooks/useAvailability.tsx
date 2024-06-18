import { type Quarter } from '../core/common/quarters/domain/Quarter';
import { getQuartersByIds } from '../core/common/quarters/services/getQuartersByIds';
import destinationData from '../core/data/Destinations.json';
import { type Destination } from '../core/destination/domain/Destination';

export const useAvailability = () => {
  const checkAvailabilityByDestination = (destinationId: number): Quarter[] => {
    const destination = destinationData.find((dest) => dest.id === destinationId);
    const availableQuarterIds = destination?.availability || [];
    const availableQuarters = getQuartersByIds(availableQuarterIds);

    return availableQuarters;
  };

  const checkAvailabilityByQuarter = (quarterId: string): Destination[] => {
    const destinationsAvailable: Destination[] = [];

    destinationData.map((dest) => {
      if (dest.availability.includes(quarterId)) {
        destinationsAvailable.push(dest);
      }
    });
 
    return destinationsAvailable;
  };

  const isQuarterAvailableOnDestination = (quarterId: string, destinationId: string): boolean => {
    const destination = destinationData.find(dest => dest.id.toString() === destinationId);
    if (!destination) return false;
    return destination.availability.includes(quarterId);
  };

  return { checkAvailabilityByDestination, checkAvailabilityByQuarter, isQuarterAvailableOnDestination };
};
