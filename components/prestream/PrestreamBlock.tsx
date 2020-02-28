import * as React from 'react'
import styled, { css } from 'styled-components'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'
import { format } from 'date-fns'

import useClock from '../../utils/useClock'

import BlockHeader from '../layout/BlockHeader'
import BlockHeaderInner, { HeaderTitle, HeaderSub } from '../layout/BlockHeaderInner'
import BlockContent from '../layout/BlockContent'
import PrestreamRoot from './PrestreamRoot'
import PrestreamSection from './PrestreamSection'
import welcomeSplashes from '../../utils/welcomeSplashes'
import useInterval from '../../utils/useInterval'
import sleep from '../../utils/sleep'

const TRANSITION_DURATION = 500

const BlockFooter = styled('footer')`
  padding: 12px 16px;
  height: 56px;
`

interface FooterParagraphProps {
  state: TransitionStatus
}

const Exited = css`
  opacity: 0;
`

const Entered = css`
  opacity: 1;
`

const FooterParagraph = styled('p')<FooterParagraphProps>`
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

const HeaderDate = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;

  span {
    margin-right: 16px;
    font-weight: 600;
  }
`

const HeaderTime = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
`

interface PrestreamBlockProps {
  heading?: string
  title: string
  streamName?: string
  description?: string
  backgroundColor?: string
  gradientStart?: string
  gradientEnd?: string
  splashes?: string[]
}

export default function PrestreamBlock({
  heading,
  description,
  title,
  backgroundColor,
  gradientStart,
  gradientEnd,
  splashes = welcomeSplashes
}: PrestreamBlockProps) {
  const [transitioning, setTransitioning] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const time = useClock()

  useInterval(() => {
    ;(async () => {
      const next = currentIndex + 1
      setTransitioning(true)

      await sleep(1000)

      if (!splashes[next]) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(next)
      }

      setTransitioning(false)
    })()
  }, 8000)

  return (
    <PrestreamRoot
      backgroundColor={backgroundColor}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      <BlockHeader>
        <BlockHeaderInner>
          <HeaderTitle>
            @resir014<span> // resir014.xyz</span>
          </HeaderTitle>
          <HeaderSub>Pre-Stream Screen</HeaderSub>
        </BlockHeaderInner>
        <BlockHeaderInner right>
          <HeaderDate>
            <span>{format(time, 'EEEE')}</span> {format(time, 'dd MMMM yyyy')}
          </HeaderDate>
          <HeaderTime>{format(time, 'HH:mm:ss')}</HeaderTime>
        </BlockHeaderInner>
      </BlockHeader>
      <BlockContent>
        <PrestreamSection>
          {heading && <h1>{heading}</h1>}
          <h2>{title}</h2>
          <p>
            <strong>{format(time, 'dd.MM.yyyy')} —</strong> {description || 'No description given.'}
          </p>
        </PrestreamSection>
      </BlockContent>
      <BlockFooter>
        <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
          {state => <FooterParagraph state={state}>{splashes[currentIndex]}</FooterParagraph>}
        </Transition>
      </BlockFooter>
    </PrestreamRoot>
  )
}
