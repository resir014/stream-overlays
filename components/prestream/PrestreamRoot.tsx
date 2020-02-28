import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/variables'

interface PrestreamRootProps {
  backgroundColor?: string
  gradientStart?: string
  gradientEnd?: string
  hasChatbox?: boolean
}

const Root = styled('section')<Pick<PrestreamRootProps, 'backgroundColor'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  min-width: 450px;
  padding: 24px;
  font-size: 24px;
  color: ${colors.white};
  background-color: ${props => props.backgroundColor || colors.black};
`

const Inner = styled('div')<PrestreamRootProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: ${props => (props.hasChatbox ? '1024px' : '1280px')};
  height: 100%;
  max-height: 600px;
  font-size: 24px;
  margin-right: 24px;
  color: ${colors.white};
  background-color: ${props => props.backgroundColor || colors.black};
  border: 12px solid;
  border-image-source: linear-gradient(
    to right,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  border-image-slice: 1;
`

export const Chatbox = styled('div')<Omit<PrestreamRootProps, 'hasChatbox'>>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 504px;
  height: 100%;
  max-height: 600px;
  font-size: 24px;
  color: ${colors.white};
  background-color: ${props => props.backgroundColor || colors.black};
  border: 12px solid;
  border-image-source: linear-gradient(
    to right,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  border-image-slice: 1;
`

const PrestreamRoot: React.FC<PrestreamRootProps> = ({
  children,
  backgroundColor,
  gradientStart = colors.ultramarine,
  gradientEnd = colors.green
}) => (
  <Root backgroundColor={backgroundColor}>
    <Inner
      backgroundColor={backgroundColor}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      {children}
    </Inner>
  </Root>
)

export default PrestreamRoot
