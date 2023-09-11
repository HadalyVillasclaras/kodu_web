import { Quarter } from "../../common/quarters/domain/Quarter";

export interface DestinationDetails {
  persons?: number;
  beds?: number;
  bathrooms?: number;
  amenities: string[];
}

export interface Destination {
  id: number;
  name: string;
  location: string;
  price: number;
  availability?: string[] | Quarter[];
  description: string;
  details: DestinationDetails;
  images: string[];
}