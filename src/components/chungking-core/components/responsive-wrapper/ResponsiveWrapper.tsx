import * as React from 'react'
import styled from '@emotion/styled'
import { Box, BoxProps } from '../../foundations'

export interface ResponsiveWrapperProps extends BoxProps {
  ratio?: number
}

const StyledWrapper = styled(Box)<ResponsiveWrapperProps>`
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: calc(100% / (${(props) => props.ratio}));
  }
`

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ ratio, children, ...rest }) => {
  return (
    <StyledWrapper ratio={ratio} {...rest}>
      {children}
    </StyledWrapper>
  )
}

ResponsiveWrapper.defaultProps = {
  ratio: 16 / 9
}

export default ResponsiveWrapper
