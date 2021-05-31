import { Box, BoxProps } from '@resir014/chungking-react'
import * as React from 'react'

type DashboardPageContentProps = BoxProps

const DashboardPageContent: React.FC<DashboardPageContentProps> = ({ children, ...rest }) => {
  return (
    <Box as="section" flex="1 1 auto" pt="lg" px="lg" pb="xl" {...rest}>
      <Box mx="auto" width="100%" maxWidth={970}>
        {children}
      </Box>
    </Box>
  )
}

export default DashboardPageContent
