import * as React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { colors } from '../../styles/variables'
import useClock from '../../utils/useClock'

import BlockRoot from '../layout/BlockRoot'
import BlockHeader from '../layout/BlockHeader'
import BlockHeaderInner from '../layout/BlockHeaderInner'

const HeaderTitle = styled('h1')`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  span {
    font-weight: 400;
  }
`

const Content = styled('section')`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0 16px;
`

const Block = styled('div')`
  flex: 1;
  background-color: ${colors.green};
  width: 100%;
  border: 2px solid ${colors.white};
`
const BlockFooter = styled('footer')`
  padding: 12px 16px;
`

const FooterParagraph = styled('p')`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`

export default function MainWindowBlock() {
  const time = useClock()

  return (
    <BlockRoot>
      <BlockHeader small>
        <BlockHeaderInner>
          <HeaderTitle>Twitch-Driven Development</HeaderTitle>
        </BlockHeaderInner>
        <BlockHeaderInner right>
          <HeaderTitle as="h2">
            <span>{format(time, 'DD MMMM YYYY')}</span>
          </HeaderTitle>
        </BlockHeaderInner>
      </BlockHeader>
      <Content>
        <Block />
      </Content>
      <BlockFooter>
        <FooterParagraph>@resir014 // resir014.xyz</FooterParagraph>
      </BlockFooter>
    </BlockRoot>
  )
}
