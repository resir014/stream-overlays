import { InfoItemCard } from '~/components/info-item-card';

export interface FlightItineraryProps {
  origin: string;
  destination: string;
}

export function FlightItinerary({ origin, destination }: FlightItineraryProps) {
  return <InfoItemCard content={`${origin} -> ${destination}`} />;
}
