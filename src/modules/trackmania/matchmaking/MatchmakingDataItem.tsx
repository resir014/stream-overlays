import * as React from 'react'
import { ItemCard, ItemTitle, ItemContent } from '~/components/overlay'

export interface MatchmakingDataItemProps {
  name: string
  value?: React.ReactNode
}

const MatchmakingDataItem: React.FC<MatchmakingDataItemProps> = ({ name, value }) => {
  return (
    <ItemCard>
      <ItemTitle>{name}</ItemTitle>
      {value && <ItemContent>{value}</ItemContent>}
    </ItemCard>
  )
}

export default MatchmakingDataItem
