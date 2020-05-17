import * as React from 'react'
import styled from 'styled-components'

import { colors } from 'styles/variables'

import BlockRoot from '../layout/BlockRoot'
import BlockHeader from '../layout/BlockHeader'
import BlockFooter from '../layout/BlockFooter'

interface HeaderTitleProps {
  lowercase?: boolean
}

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
    <BlockRoot>
      <BlockHeader isFrame title={title || 'Untitled Stream'} />
      <Content>
        <Block />
      </Content>
      {isDisplayStream && <BlockFooter />}
    </BlockRoot>
  )
}
