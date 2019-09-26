import * as React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/variables'

import BlockHeader from '../layout/BlockHeader'
import BlockHeaderInner from '../layout/BlockHeaderInner'

const Wrapper = styled('header')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 450px;
  height: 100%;
  max-height: 48px;
  font-size: 24px;
  color: ${colors.white};
  background-color: ${colors.black};
`

const HeaderTitle = styled('h1')`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  span {
    font-weight: 400;
  }
`

export default function MainWidgetBlock() {
  return (
    <Wrapper>
      <BlockHeader>
        <BlockHeaderInner>
          <HeaderTitle>
            @resir014 <span>// resir014.xyz</span>
          </HeaderTitle>
        </BlockHeaderInner>
        <BlockHeaderInner right>
          <HeaderTitle as="h2">Twitch-Driven Development</HeaderTitle>
        </BlockHeaderInner>
      </BlockHeader>
    </Wrapper>
  )
}
