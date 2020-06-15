import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'
import { css } from '@emotion/core'

const Root = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Image = styled('img')`
  display: inline-block;
  width: 96px;
  height: 96px;
  border-radius: 96px;
  border: 2px solid ${colors.white};
`

const PrestreamTitle = styled('h1')`
  margin: 0;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;

  span {
    font-weight: 400;
  }
`

export const HeaderSub = styled('h2')`
  margin: 0;
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
`

export default function PrestreamLogo() {
  return (
    <Root>
      <Image src="/static/resir014-logo.png" alt="@resir014" />
      <div
        css={css`
          margin-left: 48px;
        `}
      >
        <PrestreamTitle>
          resir014 <span>&#47;&#47; resir014.xyz</span>
        </PrestreamTitle>
        <HeaderSub>twitch.tv/resir014</HeaderSub>
      </div>
    </Root>
  )
}
