import { css } from '@emotion/react'
import { Box, Text, theme } from '@resir014/chungking-react'
import * as React from 'react'
import { NextPage } from 'next'
import { transparentize } from 'polished'
import OverlayRoot from '~/components/overlay/OverlayRoot'

const CaptureGuardBlock: NextPage = () => {
  return (
    <OverlayRoot>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor={transparentize(0.1, theme.colors.black)}
        border="4px solid"
        borderColor="green.500"
        flex="1 1 auto"
      >
        <Text
          variant={800}
          display="inline-block"
          maxWidth={480}
          color="white"
          css={css`
            text-shadow: 0px 0px 1px ${theme.colors.black}, 0px 0px 2px ${theme.colors.black},
              0px 0px 3px ${theme.colors.black}, 0px 0px 4px ${theme.colors.black},
              0px 0px 5px ${theme.colors.black};
          `}
        >
          if you&apos;re reading this then something bad happened
        </Text>
      </Box>
    </OverlayRoot>
  )
}

export default CaptureGuardBlock
