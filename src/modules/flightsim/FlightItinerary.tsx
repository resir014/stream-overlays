import * as React from 'react'
import { ItemCard, ItemTitle } from './items'

export interface FlightItineraryProps {
  origin: string
  destination: string
}

const FlightItinerary: React.FC<FlightItineraryProps> = ({ origin, destination }) => {
  return (
    <ItemCard>
      <ItemTitle>
        {origin} -&gt; {destination}
      </ItemTitle>
    </ItemCard>
  )
}

export default FlightItinerary
