import { Box, BoxProps, colors } from '@resir014/chungking-react'
import { transparentize } from 'polished'
import * as React from 'react'
import BottomBar from '~/modules/bottom-bar/BottomBar'

interface SceneWrapperProps extends BoxProps {
  _innerProps?: BoxProps
}

const SceneWrapper: React.FC<SceneWrapperProps> = ({ children, _innerProps, ...rest }) => {
  return (
    <Box
      as="section"
      display="grid"
      gridTemplateRows="1fr auto"
      gridTemplateColumns="1fr"
      gridTemplateAreas={`
      "content"
      "bottom-bar"
    `}
      flex="1 1 auto"
      width="100%"
      minWidth={450}
      position="relative"
      fontSize="24px"
      backgroundColor={transparentize(0.5, colors.grey[900])}
      color="white"
      zIndex={0}
      {...rest}
    >
      <Box display="flex" alignItems="center" gridArea="content" px="xxl" pt="lg" {..._innerProps}>
        {children}
      </Box>
      <BottomBar variant="prestream" gridArea="bottom-bar" />
    </Box>
  )
}

export default SceneWrapper
