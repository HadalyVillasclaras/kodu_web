export interface DestinationDetails {
  person?: number;
  bed?: number;
  bathroom?: number;
}

export interface Destination {
  id: number;
  name: string;
  location: string;
  price: number;
  avaibility: string[];
  description: string;
  details: DestinationDetails;
  images: string[];
}