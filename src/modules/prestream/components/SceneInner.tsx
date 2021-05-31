import { Box, theme } from '@resir014/chungking-react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { transparentize } from 'polished'
import * as React from 'react'
import { PrestreamVariants } from '~/interfaces/types'
import parseStreamTimeQuery from '../utils/parseStreamTimeQuery'
import PrestreamDetails from './PrestreamDetails'
import PrestreamEventsBlock from './PrestreamEventsBlock'
import PrestreamIcon from './PrestreamIcon'

const PrestreamClock = dynamic(() => import('./PrestreamClock'), {
  ssr: false,
  loading: () => <Box gridArea="clock" backgroundColor={transparentize(0.25, theme.colors.black)} />
})

interface SceneInnerProps {
  variant?: PrestreamVariants
  text: string
}

const SceneInner: React.FC<SceneInnerProps> = ({ variant, text }) => {
  const router = useRouter()
  const { startH, startM } = React.useMemo(() => parseStreamTimeQuery(router.query), [router.query])

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="256px 1fr 128px"
        gridTemplateRows="128px 128px 1fr"
        gridTemplateAreas={`
          "clock clock logo"
          "details details details"
          "events chat chat"
        `}
        width="100%"
        maxWidth={896}
        height="100%"
        maxHeight={728}
        boxShadow="double"
      >
        <PrestreamClock gridArea="clock" variant={variant} startH={startH} startM={startM} />
        <PrestreamIcon gridArea="logo" variant={variant} />
        <PrestreamDetails text={text} gridArea="details" variant={variant} />
        <PrestreamEventsBlock gridArea="events" />
        <Box backgroundColor={transparentize(0.1, theme.colors.grey[900])} gridArea="chat" />
      </Box>
    </>
  )
}

export default SceneInner
