import * as React from 'react'
import styled from 'styled-components'

interface HeaderInnerProps {
  right?: boolean
}

const Root = styled('div')<HeaderInnerProps>`
  text-align: ${props => (props.right ? 'right' : 'left')};
`

export const HeaderTitle = styled('h1')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`

export const HeaderSub = styled('h2')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
`

const BlockHeaderInner: React.FC<HeaderInnerProps> = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>
}

export default BlockHeaderInner
