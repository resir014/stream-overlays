import * as React from 'react'
import { ItemCard, ItemTitle, ItemContent } from '../../components/overlay'

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
