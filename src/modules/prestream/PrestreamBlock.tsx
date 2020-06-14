import * as React from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'
import { format } from 'date-fns'

import { colors } from 'styles/variables'
import useInterval from 'utils/useInterval'
import sleep from 'utils/sleep'
import welcomeSplashes from 'utils/welcomeSplashes'

import ContentBlock from 'components/stream-blocks/ContentBlock'

import BlockContent from 'components/layout/BlockContent'
import PrestreamRoot from 'components/prestream/PrestreamRoot'
import PrestreamSection from 'components/prestream/PrestreamSection'
import PrestreamLogo from 'components/prestream/PrestreamLogo'
import PrestreamFooterBlock from 'components/stream-blocks/PrestreamFooterBlock'

const TRANSITION_DURATION = 500

interface FooterParagraphProps {
  state: TransitionStatus
}

interface PrestreamBlockProps {
  heading?: React.ReactNode
  title: string
  subheading?: string
  date?: string
  description?: string
  titleColor?: string
  backgroundColor?: string
  textColor?: string
  splashes?: string[]
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

const PrestreamDateTime = dynamic(() => import('components/prestream/PrestreamDateTime'), {
  ssr: false
})

export default function PrestreamBlock({
  heading,
  description,
  title,
  date,
  titleColor,
  backgroundColor,
  textColor,
  splashes = welcomeSplashes
}: PrestreamBlockProps) {
  const [transitioning, setTransitioning] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)

  useInterval(() => {
    const getSplashIndex = async () => {
      const next = currentIndex + 1
      setTransitioning(true)

      await sleep(1000)

      if (!splashes[next]) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(next)
      }

      setTransitioning(false)
    }

    getSplashIndex()
  }, 8000)

  return (
    <>
      <PrestreamRoot
        title={title}
        date={date ? format(Date.parse(date), 'yyyy.MM.dd') : undefined}
        subtitle={description || 'No description given.'}
      >
        <BlockContent>
          <PrestreamSection>
            <ContentBlock
              hasShadow
              css={css`
                height: 640px;
              `}
              backgroundColor={backgroundColor}
              textColor={textColor}
            >
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  grid-gap: 24px;
                  flex: 1;
                `}
              >
                <PrestreamLogo />
                <PrestreamDateTime titleColor={titleColor} text={heading || 'Untitled'} />
              </div>
            </ContentBlock>
          </PrestreamSection>
        </BlockContent>
      </PrestreamRoot>
      <PrestreamFooterBlock
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-radius: 0;
          border: none;
          border-top: 4px solid ${colors.grey90};
          z-index: 3;
        `}
      >
        <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
          {state => <FooterParagraph state={state}>{splashes[currentIndex]}</FooterParagraph>}
        </Transition>
      </PrestreamFooterBlock>
    </>
  )
}
