import * as React from 'react'
import { ItemCard, ItemTitle, ItemContent } from './items'

export interface FlightInfoProps {
  name: string
  value: string
}

const FlightInfo: React.FC<FlightInfoProps> = ({ name, value }) => {
  return (
    <ItemCard>
      <ItemTitle>{name}</ItemTitle>
      <ItemContent>{value}</ItemContent>
    </ItemCard>
  )
}

export default FlightInfo
