/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { colors, fonts } from '../../styles/variables'

const HomeWidget = styled('section')`
  display: block;
  width: 100%;
  max-width: 460px;
  height: 100%;
  max-height: 380px;
  padding: 24px;
  background-color: ${colors.grey90};
  color: white;
`

const HeaderTitle = styled('h1')`
  margin: 0;
  font-size: 36px;
  line-height: 42px;
  font-weight: 400;
  text-transform: lowercase;
`

const HeaderParagraph = styled('p')`
  margin: 8px 0;
  font-family: ${fonts.serif};
  font-size: 24px;
  line-height: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default function HomeBlock() {
  return (
    <HomeWidget>
      <HeaderTitle>Home</HeaderTitle>
      <HeaderParagraph>
        <Link href="/pre-stream">
          <a>Pre-Stream Screen</a>
        </Link>
      </HeaderParagraph>
      <HeaderParagraph>
        <Link href="/main-window">
          <a>Main Window</a>
        </Link>
      </HeaderParagraph>
    </HomeWidget>
  )
}
