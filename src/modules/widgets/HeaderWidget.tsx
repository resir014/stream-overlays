/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from 'styles/variables'

interface BlockHeaderProps {
  isFrame?: boolean
  title?: string
}

interface BlockHeaderInnerProps {
  right?: boolean
}

const fullScreenStyles = css`
  padding: 8px;
`

const frameStyles = css`
  height: 32px;
  padding: 0 8px;
`

const Root = styled('header')<BlockHeaderProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05rem;
  background-color: ${colors.black};
  color: ${colors.white};

  ${props => (props.isFrame ? frameStyles : fullScreenStyles)};
`

const BlockHeaderInner = styled('div')<BlockHeaderInnerProps>`
  text-align: ${props => (props.right ? 'right' : 'left')};
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

const HeaderSubtitle = HeaderTitle.withComponent('h2')

export default function HeaderWidget({ isFrame, title }: BlockHeaderProps) {
  return (
    <Root isFrame={isFrame}>
      <BlockHeaderInner>
        <HeaderTitle>
          @resir014 <span>// resir014.xyz</span>
        </HeaderTitle>
      </BlockHeaderInner>
      <BlockHeaderInner right>
        <HeaderSubtitle>
          <span>{title || 'Untitled Stream'}</span>
        </HeaderSubtitle>
      </BlockHeaderInner>
    </Root>
  )
}
