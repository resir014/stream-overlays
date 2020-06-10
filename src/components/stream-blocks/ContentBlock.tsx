import * as React from 'react'
import styled from '@emotion/styled'
import { colors, fonts } from 'styles/variables'
import { transparentize } from 'polished'

interface ContentBlockProps {
  className?: string
  style?: React.CSSProperties
  title: string
  backgroundColor?: string
  textColor?: string
}

const Root = styled('div')<Pick<ContentBlockProps, 'backgroundColor' | 'textColor'>>`
  display: flex;
  flex-direction: column;
  background-color: ${props => transparentize(0.6, props.backgroundColor || colors.grey90)};
  border: 4px solid ${props => props.backgroundColor || colors.grey90};
  color: ${props => props.textColor || colors.white};
  border-radius: 8px;
`

const Content = styled('div')`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 24px 12px;
`

const Inner = styled('div')``

const Header = styled('div')`
  padding: 12px 24px 8px;
`

const StreamStatus = styled('span')`
  display: block;
  margin-top: 0;
  font-size: 16px;
  line-height: 1.15;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
  box-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000,
    0px 0px 5px #000;
`

const ContentBlock: React.FC<ContentBlockProps> = ({
  className,
  style,
  title,
  children,
  backgroundColor,
  textColor
}) => {
  return (
    <Root
      className={className}
      style={style}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <Header>
        <StreamStatus>{title}</StreamStatus>
      </Header>
      <Content>
        <Inner>{children}</Inner>
      </Content>
    </Root>
  )
}

export default ContentBlock
