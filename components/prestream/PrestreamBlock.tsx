import * as React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import useClock from '../../utils/useClock'

import BlockRoot from '../layout/BlockRoot'
import BlockHeader from '../layout/BlockHeader'
import BlockHeaderInner, { HeaderTitle, HeaderSub } from '../layout/BlockHeaderInner'
import BlockContent from '../layout/BlockContent'
import BlockSection from '../layout/BlockSection'

const BlockFooter = styled('footer')`
  padding: 18px 24px;
`

const FooterParagraph = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
`

const HeaderDate = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;

  span {
    margin-right: 16px;
    font-weight: 600;
  }
`

const HeaderTime = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
`

export default function PrestreamBlock() {
  const time = useClock()

  return (
    <BlockRoot>
      <BlockHeader>
        <BlockHeaderInner>
          <HeaderTitle>Livestream #01</HeaderTitle>
          <HeaderSub>Pre-stream scene</HeaderSub>
        </BlockHeaderInner>
        <BlockHeaderInner right>
          <HeaderDate>
            <span>{format(time, 'dddd')}</span> {format(time, 'DD MMMM YYYY')}
          </HeaderDate>
          <HeaderTime>{format(time, 'HH:mm:ss')}</HeaderTime>
        </BlockHeaderInner>
      </BlockHeader>
      <BlockContent>
        <BlockSection>
          <h1>Coming Up</h1>
          <h2>Random Gaming Hour</h2>
          <p>
            <strong>24.08.2019 &mdash;</strong> An hour (or two) of chill gaming, no microphones.
            Feel free to interact in chat!
          </p>
        </BlockSection>
      </BlockContent>
      <BlockFooter>
        <FooterParagraph>@resir014 // resir014.xyz</FooterParagraph>
      </BlockFooter>
    </BlockRoot>
  )
}
