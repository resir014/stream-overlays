import * as React from 'react'
import styled, { css } from 'styled-components'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'
import { format } from 'date-fns'

import useInterval from 'utils/useInterval'
import sleep from 'utils/sleep'
import welcomeSplashes from 'utils/welcomeSplashes'
import { colors } from 'styles/variables'

import ContentBlock from 'components/stream-blocks/ContentBlock'

import BlockContent from '../../components/layout/BlockContent'
import PrestreamRoot from '../../components/prestream/PrestreamRoot'
import PrestreamSection from '../../components/prestream/PrestreamSection'

const TRANSITION_DURATION = 500

interface FooterParagraphProps {
  state: TransitionStatus
}

interface PrestreamBlockProps {
  heading?: string
  title: string
  streamName?: string
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

const StreamTitle = styled('h2')<Pick<PrestreamBlockProps, 'titleColor'>>`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 72px;
  line-height: 1.15;
  font-weight: 600;
  color: ${props => props.titleColor || colors.white};
`

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
    <PrestreamRoot>
      <BlockContent>
        <PrestreamSection>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ContentBlock
              style={{ flex: 1, marginBottom: 24 }}
              title={heading || 'Untitled'}
              backgroundColor={backgroundColor}
              textColor={textColor}
            >
              <StreamTitle titleColor={titleColor}>{title}</StreamTitle>
              <p>{description || 'No description given.'}</p>
            </ContentBlock>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gridGap: 24,
                  marginBottom: 24
                }}
              >
                {date && (
                  <ContentBlock title="Date">
                    {format(Date.parse(date), 'dd MMMM yyyy')}
                  </ContentBlock>
                )}
                <ContentBlock title="Time">21:00 (GMT +7) / 1400z</ContentBlock>
                <ContentBlock title="Location">twitch.tv/resir014</ContentBlock>
              </div>
              <ContentBlock style={{ height: 122, flex: 1 }} title="Notes">
                <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
                  {state => (
                    <FooterParagraph state={state}>{splashes[currentIndex]}</FooterParagraph>
                  )}
                </Transition>
              </ContentBlock>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ContentBlock style={{ flex: 1, marginBottom: 24 }} title="Chatbox" />
            <ContentBlock style={{ height: 240 }} title="Events" />
          </div>
        </PrestreamSection>
      </BlockContent>
    </PrestreamRoot>
  )
}
