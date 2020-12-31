import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { Box, colors } from '@resir014/chungking-react'
import BottomBarSocialLinks from './BottomBarSocialLinks'
import BottomBarEvents from './BottomBarEvents'

const BottomBarClock = dynamic(() => import('./BottomBarClock'), {
  ssr: false
})

interface BottomBarProps {
  variant?: 'default' | 'prestream' | 'nye'
}

const BottomBar: React.FC<BottomBarProps> = ({ variant }) => {
  const hideClock = React.useMemo(() => variant === 'prestream', [variant])
  const nyeVariant = React.useMemo(() => variant === 'nye', [variant])

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
      {hideClock || nyeVariant ? <BottomBarSocialLinks /> : <BottomBarClock />}
      <Box display="block" gridArea="footer" />
    </Box>
  )
}

export default BottomBar
