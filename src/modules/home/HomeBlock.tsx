/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import { colors } from '~/styles/variables'

const HomeWidget = styled('section')`
  display: block;
  flex: 1 1 auto;
  padding: 24px;
  background-color: ${colors.grey90};
  color: white;
`

const HeaderTitle = styled('h1')`
  margin: 0;
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;

  &:not(:first-child) {
    margin-top: 24px;
  }
`

const HeaderParagraph = styled('p')`
  margin: 8px 0;
  font-size: 24px;
  line-height: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default function HomeBlock() {
  return (
    <HomeWidget>
      <HeaderTitle>Scenes</HeaderTitle>
      <HeaderParagraph>
        <Link href="/pre-stream">
          <a>Pre-Stream Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/brb">
          <a>Be Right Back Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/end">
          <a>End Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderTitle>Blocks</HeaderTitle>
      <HeaderParagraph>
        <Link href="/header">
          <a>Header</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/footer">
          <a>Footer</a>
        </Link>
      </HeaderParagraph>
      <HeaderTitle>Widgets</HeaderTitle>
      <HeaderParagraph>
        <Link href="/saweria">
          <a>Saweria Alerts</a>
        </Link>
      </HeaderParagraph>
    </HomeWidget>
  )
}
