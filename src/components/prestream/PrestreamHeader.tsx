/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

interface PrestreamHeaderProps {
  isFrame?: boolean
  title?: string
}

interface PrestreamHeaderInnerProps {
  right?: boolean
}

const fullScreenStyles = css`
  padding: 8px;
`

const frameStyles = css`
  height: 40px;
  padding: 0 8px;
`

const Root = styled('header')<PrestreamHeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05rem;

  ${props => (props.isFrame ? frameStyles : fullScreenStyles)};
`

export const PrestreamHeaderInner = styled('div')<PrestreamHeaderInnerProps>`
  text-align: ${props => (props.right ? 'right' : 'left')};
`

const PrestreamTitle = styled('h1')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;

  span {
    font-weight: 400;
  }
`

export const HeaderSub = styled('h2')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
`

export default function PrestreamHeader({ isFrame }: PrestreamHeaderProps) {
  return (
    <Root isFrame={isFrame}>
      <PrestreamHeaderInner>
        <PrestreamTitle>
          @resir014 <span>// resir014.xyz</span>
        </PrestreamTitle>
      </PrestreamHeaderInner>
    </Root>
  )
}
