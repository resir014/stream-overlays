/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import format from 'date-fns/format'

interface PrestreamHeaderProps {
  isFrame?: boolean
  title?: string
  date?: string
  subtitle?: string
}

interface PrestreamHeaderInnerProps {
  right?: boolean
}

const fullScreenStyles = css`
  padding: 24px 48px 0;
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

  strong {
    font-weight: 700;
  }

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

export default function PrestreamHeader({ isFrame, title, date, subtitle }: PrestreamHeaderProps) {
  if (isFrame) {
    return (
      <Root isFrame={isFrame}>
        <PrestreamHeaderInner>
          <PrestreamTitle>
            @resir014 <span>// resir014.xyz</span>
          </PrestreamTitle>
        </PrestreamHeaderInner>
        <PrestreamHeaderInner right>
          <HeaderSub>twitch.tv/resir014</HeaderSub>
        </PrestreamHeaderInner>
      </Root>
    )
  }

  return (
    <Root
      isFrame={isFrame}
      css={css`
        /* position: absolute; */
      `}
    >
      <PrestreamHeaderInner>
        <PrestreamTitle>
          <strong>
            {date && <>{format(Date.parse(date), 'yyyy.MM.dd')} — </>}
            {title}
          </strong>
        </PrestreamTitle>
        {subtitle && <HeaderSub>{subtitle}</HeaderSub>}
      </PrestreamHeaderInner>
    </Root>
  )
}
