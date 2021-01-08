import { Stack, StackProps } from '@resir014/chungking-react'
import * as React from 'react'

export type DashboardSectionProps = StackProps

const DashboardSection: React.FC<DashboardSectionProps> = ({ children, ...rest }) => {
  return (
    <Stack spacing="lg" {...rest}>
      {children}
    </Stack>
  )
}

export default DashboardSection
