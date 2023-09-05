import quartersData from '../../../data/AvailabilityQuarters.json';
import { Quarter } from '../domain/Quarter';

export const getQuartersByIds = (ids: string[]): Quarter[] => {
  return quartersData.filter(quarter => ids.includes(quarter.id));
};