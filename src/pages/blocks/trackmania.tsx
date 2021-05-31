import * as React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { stringifyUrl } from 'query-string'
import { transparentize } from 'polished'
import { Box, Iframe, theme } from '@resir014/chungking-react'

import OverlayRoot from '~/components/overlay/OverlayRoot'

const TrackManiaControlBlockPage: NextPage = () => {
  const { query } = useRouter()

  const overlayURL = React.useMemo(
    () =>
      stringifyUrl({
        url: 'https://tmviz.vercel.app/overlay',
        query
      }),
    [query]
  )

  return (
    <OverlayRoot>
      <Box display="flex" flexDirection="column" flex="1 1 auto">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          py="md"
          px="lg"
          backgroundColor={transparentize(0.75, theme.colors.blue[500])}
          borderTop="4px solid"
          borderTopColor="blue.500"
        >
          <Iframe title="overlay" src={overlayURL} width={256} height={140} />
        </Box>
      </Box>
    </OverlayRoot>
  )
}

export default TrackManiaControlBlockPage
