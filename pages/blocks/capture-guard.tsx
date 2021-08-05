import { Box, Text } from '@resir014/chungking-react'
import * as React from 'react'
import { NextPage } from 'next'
import OverlayRoot from '~/components/overlay/OverlayRoot'

const CaptureGuardBlock: NextPage = () => {
  return (
    <OverlayRoot>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="black"
        border="4px solid"
        borderColor="green.500"
        flex="1 1 auto"
      >
        <Text variant="4xl" display="inline-block" maxWidth={480} color="white" fontWeight={600}>
          if you&apos;re reading this then something bad happened
        </Text>
      </Box>
    </OverlayRoot>
  )
}

export default CaptureGuardBlock
