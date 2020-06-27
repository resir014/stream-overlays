import styled from '@emotion/styled'
import { colors } from 'styles/variables'
import { transparentize } from 'polished'

const PrestreamFooterBlock = styled('div')`
  display: flex;
  align-items: flex-start;
  height: 52px;
  padding: 0 48px;
  background-color: ${transparentize(0.6, colors.grey90)};
  border-top: 4px solid ${colors.grey90};
  color: ${colors.white};
`

export default PrestreamFooterBlock
