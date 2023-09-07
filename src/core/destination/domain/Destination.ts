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
  avaibility?: string[];
  description: string;
  details: DestinationDetails;
  images: string[];
}