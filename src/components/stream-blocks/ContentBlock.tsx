import * as React from 'react'
import styled from 'styled-components'
import { colors, fonts } from 'styles/variables'

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
  background-color: ${props => props.backgroundColor || colors.grey90};
  color: ${props => props.textColor || colors.white};
  border-radius: 8px;
`

const Content = styled('div')`
  display: flex;
  align-items: center;
  flex: 1;
`

const Inner = styled('div')`
  padding: 0 24px 24px;
`

const Header = styled('div')`
  padding: 8px 24px 0;
`

const StreamStatus = styled('span')`
  display: inline-block;
  margin-top: 0;
  font-size: 20px;
  line-height: 1.15;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
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
