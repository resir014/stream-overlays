import { Box, Text } from '@resir014/chungking-react'
import * as React from 'react'

const DashboardHeader: React.FC = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      px="lg"
      height={60}
      borderBottom="1px solid"
      borderBottomColor="grey.900"
    >
      <Text display="block" fontWeight={600}>
        Overlay Dashboard
      </Text>
    </Box>
  )
}

export default DashboardHeader
