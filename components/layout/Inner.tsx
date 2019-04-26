import * as React from 'react'
import styled, { css } from 'styled-components'

interface InnerProps {
  isCentered?: boolean
}

const FlexCentered = css`
  align-items: center;
  justify-content: center;
`

const Base = styled('main')<InnerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${props => props.isCentered && FlexCentered}
`

const Inner: React.FC<InnerProps> = ({ children, isCentered }) => (
  <Base isCentered={isCentered}>{children}</Base>
)

Inner.defaultProps = {
  isCentered: false
}

export default Inner
