import { Box, BoxProps } from '@resir014/chungking-react'
import * as React from 'react'
import { ListItem } from '../types'

import ScenesListItem from './ScenesListItem'

export interface ScenesListProps extends BoxProps {
  items: ListItem[]
}

const ScenesList: React.FC<ScenesListProps> = ({ items, ...props }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={['1fr', null, null, '1fr 1fr', '1fr 1fr 1fr']}
      gridGap="lg"
      {...props}
    >
      {items.map(scene => (
        <ScenesListItem key={scene.url} scene={scene} />
      ))}
    </Box>
  )
}

export default ScenesList
