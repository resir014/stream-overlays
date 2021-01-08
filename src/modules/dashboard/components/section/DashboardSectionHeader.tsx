import { Heading, HeadingProps } from '@resir014/chungking-react'
import * as React from 'react'

type DashboardSectionHeaderProps = HeadingProps

const DashboardSectionHeader: React.FC<DashboardSectionHeaderProps> = ({ children, ...rest }) => {
  return <Heading {...rest}>{children}</Heading>
}

export default DashboardSectionHeader
