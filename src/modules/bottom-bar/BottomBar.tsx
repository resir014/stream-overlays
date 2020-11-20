import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { Box, colors } from '~/components/chungking-core'
import BottomBarSocialLinks from './BottomBarSocialLinks'
import BottomBarEvents from './BottomBarEvents'

const BottomBarClock = dynamic(() => import('./BottomBarClock'), {
  ssr: false
})

interface BottomBarProps {
  variant?: 'default' | 'prestream'
}

const BottomBar: React.FC<BottomBarProps> = ({ variant }) => {
  const hideClock = React.useMemo(() => variant === 'prestream', [variant])

  return (
    <Box
      display="grid"
      gridTemplateRows={hideClock ? '40px 48px' : '40px 24px'}
      gridTemplateColumns="auto 320px"
      gridTemplateAreas={`
      "events clock"
      "footer footer"
    `}
      width="100%"
      height="100%"
      backgroundColor={transparentize(0.1, colors.black)}
      color="white"
      maxHeight={hideClock ? 88 : 64}
    >
      <BottomBarEvents />
      {hideClock ? <BottomBarSocialLinks /> : <BottomBarClock />}
      <Box display="block" gridArea="footer" />
    </Box>
  )
}

export default BottomBar
