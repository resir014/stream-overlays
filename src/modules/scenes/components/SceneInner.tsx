import { Box, colors } from '@resir014/chungking-react'
import dynamic from 'next/dynamic'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import PrestreamDetails from './PrestreamDetails'
import PrestreamEventsBlock from './PrestreamEventsBlock'

const PrestreamDateTime = dynamic(() => import('../../prestream/PrestreamDateTime'), { ssr: false })

interface SceneInnerProps {
  variant?: PrestreamVariants
  text: string
}

const SceneInner: React.FC<SceneInnerProps> = ({ text, variant }) => {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="256px 1fr"
        gridTemplateRows="128px 1fr"
        gridTemplateAreas={`
          "details details"
          "events chat"
        `}
        width="100%"
        maxWidth={896}
        height="100%"
        maxHeight={728}
        boxShadow="double"
      >
        <PrestreamDetails gridArea="details" variant={variant} />
        <PrestreamEventsBlock gridArea="events" />
        <Box backgroundColor={transparentize(0.1, colors.grey[900])} gridArea="chat" />
      </Box>
      <PrestreamDateTime text={text} variant={variant} />
    </>
  )
}

export default SceneInner
