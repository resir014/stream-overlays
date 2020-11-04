import * as React from 'react'
import { Box } from '~/components/chungking-core'
import DollarSign from '~/components/icons/DollarSign'
import Star from '~/components/icons/Star'
import TrendingUp from '~/components/icons/TrendingUp'
import BottomBarEventBox from './components/BottomBarEventBox'

const BottomBarEvents: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridArea="events"
      pl="xxl"
      pr="md"
      backgroundColor="black"
      color="white"
    >
      <BottomBarEventBox icon={DollarSign} />
      <BottomBarEventBox icon={Star} borderColor="orange.400" />
      <BottomBarEventBox icon={TrendingUp} borderColor="turquoise.500" />
    </Box>
  )
}

export default BottomBarEvents
