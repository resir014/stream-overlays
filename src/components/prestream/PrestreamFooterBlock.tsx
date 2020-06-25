import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from 'styles/variables'
import { transparentize } from 'polished'
import { TransitionStatus } from 'react-transition-group/Transition'

interface FooterParagraphProps {
  state: TransitionStatus
}

const Exited = css`
  opacity: 0;
`

const Entered = css`
  opacity: 1;
`

export const TRANSITION_DURATION = 500

export const PrestreamFooterParagraph = styled('p')<FooterParagraphProps>`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  transition: all ${TRANSITION_DURATION}ms ease;
  opacity: 0;

  ${props => props.state === 'entering' && Entered}
  ${props => props.state === 'entered' && Entered}
  ${props => props.state === 'exiting' && Exited}
  ${props => props.state === 'exited' && Exited}
`

const PrestreamFooterBlock = styled('div')`
  display: flex;
  align-items: flex-start;
  padding: 8px 48px 48px;
  background-color: ${transparentize(0.6, colors.grey90)};
  border-top: 4px solid ${colors.grey90};
  color: ${colors.white};
`

export default PrestreamFooterBlock
