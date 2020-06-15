import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { colors, fonts } from 'styles/variables'

interface FooterBlockProps {
  className?: string
  style?: React.CSSProperties
  title: string
}

const Root = styled('div')`
  display: flex;
  flex-direction: column;
`

const Title = styled('span')`
  display: inline-block;
  width: 200px;
  font-size: 16px;
  line-height: 32px;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
`

const TextSourceBox = styled('div')`
  background-color: ${transparentize(0.5, colors.grey90)};
  flex: 1 1 auto;
  width: 100%;
  max-width: 440px;
  height: 32px;
  border-radius: 4px;
`

const PrestreamTextSourceBlock: React.FC<FooterBlockProps> = ({ title, className, style }) => {
  return (
    <Root className={className} style={style}>
      <Title>{title}</Title>
      <TextSourceBox />
    </Root>
  )
}

export default PrestreamTextSourceBlock
