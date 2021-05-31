import { Box, BoxProps, Heading, Paragraph } from '@resir014/chungking-react'
import * as React from 'react'

interface DashboardPageHeaderProps extends BoxProps {
  title: string
  subtitle?: string
}

const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({ title, subtitle, ...rest }) => {
  return (
    <Box
      as="header"
      pt="lg"
      px="lg"
      pb="md"
      borderBottom="1px solid"
      borderBottomColor="grey.900"
      {...rest}
    >
      <Box mx="auto" width="100%" maxWidth={970}>
        <Heading as="h1" variant={900}>
          {title}
        </Heading>
        {subtitle && <Paragraph variant={500}>{subtitle}</Paragraph>}
      </Box>
    </Box>
  )
}

export default DashboardPageHeader
