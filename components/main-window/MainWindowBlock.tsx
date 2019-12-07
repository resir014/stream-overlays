import * as React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles/variables'

import BlockRoot from '../layout/BlockRoot'
import BlockHeader from '../layout/BlockHeader'
import BlockHeaderInner from '../layout/BlockHeaderInner'

interface HeaderTitleProps {
  lowercase?: boolean
}

const HeaderTitle = styled('h1')<HeaderTitleProps>`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  ${props => props.lowercase && 'text-transform: lowercase;'}

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
`

interface BlockProps {
  isWindowStream?: boolean
}

const Block = styled('div')<BlockProps>`
  flex: 1;
  margin-bottom: ${props => (props.isWindowStream ? '40px' : 0)};
  background-color: ${colors.greenscreen};
  width: 100%;
`

interface MainWindowBlockProps {
  title?: string
  isDisplayStream?: boolean
}

export default function MainWindowBlock({ title, isDisplayStream }: MainWindowBlockProps) {
  return (
    <BlockRoot isDisplayStream={isDisplayStream}>
      <BlockHeader isFrame>
        <BlockHeaderInner>
          <HeaderTitle>
            @resir014 <span>// resir014.xyz</span>
          </HeaderTitle>
        </BlockHeaderInner>
        <BlockHeaderInner right>
          <HeaderTitle as="h2">
            <span>{title || 'Untitled Stream'}</span>
          </HeaderTitle>
        </BlockHeaderInner>
      </BlockHeader>
      <Content>
        <Block />
      </Content>
    </BlockRoot>
  )
}
