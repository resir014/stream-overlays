import { Box, BoxProps, colors } from '@resir014/chungking-react'
import { transparentize } from 'polished'
import * as React from 'react'
import { Home } from 'react-feather'

export type DashboardSidebarProps = BoxProps

const DashboardSidebar: React.FC = ({ ...rest }) => {
  return (
    <Box as="aside" borderRight="1px solid" borderRightColor="grey.900" py="lg" {...rest}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        size={64}
        backgroundColor={transparentize(0.75, colors.blue[500])}
        borderRight="2px solid"
        borderRightColor="blue.500"
      >
        <Home />
      </Box>
    </Box>
  )
}

export default DashboardSidebar
