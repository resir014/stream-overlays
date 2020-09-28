import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors, fonts } from '~/styles/variables'
import { transparentize } from 'polished'

interface ContentBlockProps {
  className?: string
  style?: React.CSSProperties
  title?: string
  backgroundColor?: string
  textColor?: string
  hasShadow?: boolean
}

const Root = styled('div')<Pick<ContentBlockProps, 'backgroundColor' | 'textColor' | 'hasShadow'>>`
  display: flex;
  flex-direction: column;
  background-color: ${props => transparentize(0.5, props.backgroundColor || colors.grey90)};
  border: 4px solid ${props => props.backgroundColor || colors.grey90};
  color: ${props => props.textColor || colors.white};
  border-radius: 8px;
  ${props =>
    props.hasShadow &&
    css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    `}
`

const Content = styled('div')<{ hasTitle?: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  padding: ${props => (props.hasTitle ? `0 16px 8px` : `8px 16px 8px`)};
`

const Inner = styled('div')`
  width: 100%;
`

const Header = styled('div')`
  padding: 8px 16px 8px;
`

const StreamStatus = styled('span')`
  display: block;
  margin-top: 0;
  font-size: 16px;
  line-height: 1.15;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000,
    0px 0px 5px #000;
`

const ContentBlock: React.FC<ContentBlockProps> = ({
  className,
  style,
  title,
  children,
  backgroundColor,
  textColor,
  hasShadow
}) => {
  return (
    <Root
      className={className}
      style={style}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hasShadow={hasShadow}
    >
      {title && (
        <Header>
          <StreamStatus>{title}</StreamStatus>
        </Header>
      )}
      <Content hasTitle={!!title}>
        <Inner>{children}</Inner>
      </Content>
    </Root>
  )
}

export default ContentBlock
