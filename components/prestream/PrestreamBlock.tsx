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
  padding: 12px 16px;
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

interface PrestreamBlockProps {
  customHeader?: string
  no?: number
  title?: string
  date?: Date
  description?: string
}

export default function PrestreamBlock({
  customHeader,
  no,
  title,
  date,
  description
}: PrestreamBlockProps) {
  const time = useClock()
  const streamDate = date ? new Date(date || undefined) : new Date()

  return (
    <BlockRoot>
      <BlockHeader>
        <BlockHeaderInner>
          <HeaderTitle>@resir014</HeaderTitle>
          <HeaderSub>Livestream #{no || 0}</HeaderSub>
        </BlockHeaderInner>
        <BlockHeaderInner right>
          <HeaderDate>
            <span>{format(time, 'EEEE')}</span> {format(time, 'dd MMMM yyyy')}
          </HeaderDate>
          <HeaderTime>{format(time, 'HH:mm:ss')}</HeaderTime>
        </BlockHeaderInner>
      </BlockHeader>
      <BlockContent>
        <BlockSection>
          <h1>{customHeader || 'Coming Up'}</h1>
          <h2>{title}</h2>
          <p>
            <strong>{format(streamDate, 'dd.MM.yyyy')} &mdash;</strong> {description}
          </p>
        </BlockSection>
      </BlockContent>
      <BlockFooter>
        <FooterParagraph>@resir014 // resir014.xyz</FooterParagraph>
      </BlockFooter>
    </BlockRoot>
  )
}
