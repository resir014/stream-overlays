import * as React from 'react'
import { Box, BoxProps } from '../../foundations'

export interface SkeletonProps extends Omit<BoxProps, 'color' | 'backgroundColor'> {
  className?: string
  style?: React.CSSProperties
}

const Skeleton: React.FC<SkeletonProps> = ({ className, style, ...rest }) => {
  return (
    <Box className={className} style={style} display="block" width="100%" minWidth={200} height={20} backgroundColor="grey.700" {...rest} />
  )
}

export default Skeleton
