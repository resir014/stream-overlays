import dynamic from 'next/dynamic'
import * as React from 'react'
import { Box } from '~/components/chungking-core'
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
  const renderGridTemplates = React.useMemo(() => {
    if (hideClock) {
      return `
        "events clock"
        "footer footer"
      `
    }

    return `
      "caption clock"
      "events clock"
      "footer footer"
    `
  }, [hideClock])

  return (
    <Box
      display="grid"
      gridTemplateRows={hideClock ? '40px 48px' : '56px 40px 48px'}
      gridTemplateColumns="auto 320px"
      gridTemplateAreas={renderGridTemplates}
      width="100%"
      height="100%"
      backgroundColor="black"
      color="white"
      maxHeight={hideClock ? 88 : 144}
    >
      {hideClock ? null : <Box display="block" gridArea="caption" backgroundColor="#000" />}
      <BottomBarEvents />
      {hideClock ? <BottomBarSocialLinks /> : <BottomBarClock />}
      <Box
        display="block"
        gridArea="footer"
        backgroundColor="black"
        borderTop="1px solid"
        borderTopColor="grey90"
      />
    </Box>
  )
}

export default BottomBar
