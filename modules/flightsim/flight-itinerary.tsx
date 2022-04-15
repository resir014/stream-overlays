import * as React from 'react';
import { InfoItemCard } from '~/components/info-item-card';

export interface FlightItineraryProps {
  origin: string;
  destination: string;
}

export const FlightItinerary: React.FC<FlightItineraryProps> = ({ origin, destination }) => {
  return <InfoItemCard content={`${origin} -> ${destination}`} />;
};
