import * as React from 'react'
import styled from 'styled-components'
import { snakeCase } from 'text-case'
import { colors, fonts } from 'styles/variables'

interface FooterBlockProps {
  title: string
}

const Root = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled('span')`
  display: inline-block;
  width: 200px;
  margin-right: 16px;
  font-size: 12px;
  line-height: 32px;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
  text-align: right;
`

const TextSourceBox = styled('div')`
  background-color: ${colors.grey90};
  flex: 1 1 auto;
  width: 100%;
  height: 32px;
  border-radius: 4px;
`

const FooterItemBlock: React.FC<FooterBlockProps> = ({ title }) => {
  return (
    <Root>
      <Title>{snakeCase(title)}</Title>
      <TextSourceBox />
    </Root>
  )
}

export default FooterItemBlock
