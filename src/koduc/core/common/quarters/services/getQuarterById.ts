import quartersData from '../../../data/AvailabilityQuarters.json';
import { type Quarter } from '../domain/Quarter';

export const getQuarterById = (id: string): Quarter | null => {
  const matchedQuarter = quartersData.filter(quarter => quarter.id === id);
  return matchedQuarter.length > 0 ? matchedQuarter[0] : null;
};
