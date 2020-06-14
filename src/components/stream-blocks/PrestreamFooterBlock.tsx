import styled from '@emotion/styled'
import { colors } from 'styles/variables'
import { transparentize } from 'polished'

const PrestreamFooterBlock = styled('div')`
  display: flex;
  padding: 8px 48px;
  background-color: ${transparentize(0.6, colors.grey90)};
  border: 4px solid ${colors.grey90};
  color: ${colors.white};
  border-radius: 8px;
`

export default PrestreamFooterBlock
