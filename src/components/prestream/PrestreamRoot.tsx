import * as React from 'react'
import styled from '@emotion/styled'

import { colors } from 'styles/variables'
import topoPattern from 'styles/topoPattern'

import PrestreamHeader from './PrestreamHeader'

const Root = styled('section')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  min-width: 450px;
  padding: 24px 48px;
  font-size: 24px;
  color: ${colors.white};
  z-index: 1;

  ${topoPattern}
`

const GridWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, 1920px) 1fr 1fr;
  height: 100%;
  flex: 1;
  z-index: 2;
`

const Inner = styled('div')`
  display: flex;
  flex-direction: column;
  grid-column: 3/4;
  flex: 1;
`

const PrestreamRoot: React.FC = ({ children }) => (
  <Root>
    <GridWrapper>
      <Inner>
        <PrestreamHeader title="twitch.tv/resir014" />
        {children}
      </Inner>
    </GridWrapper>
  </Root>
)

export default PrestreamRoot
