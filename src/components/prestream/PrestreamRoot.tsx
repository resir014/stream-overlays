import * as React from 'react'
import styled from '@emotion/styled'
import { Transition } from 'react-transition-group'

import { colors } from 'styles/variables'
import topoPattern from 'styles/topoPattern'

import welcomeSplashes from 'utils/welcomeSplashes'
import useInterval from 'utils/useInterval'
import sleep from 'utils/sleep'

import PrestreamFooterBlock, {
  PrestreamFooterParagraph,
  TRANSITION_DURATION
} from './PrestreamFooterBlock'
import PrestreamHeader from './PrestreamHeader'

interface PrestreamRootProps {
  title?: string
  date?: string
  subtitle?: string
  splashes?: string[]
}

const Root = styled('section')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  min-width: 450px;
  font-size: 24px;
  color: ${colors.white};
  z-index: 1;

  ${topoPattern}
`

const GridWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, 1920px) 1fr 1fr;
  height: 100%;
  flex: 1;
  z-index: 2;
`

const Inner = styled('div')`
  display: flex;
  flex-direction: column;
  grid-column: 3/4;
  flex: 1;
`

const PrestreamRoot: React.FC<PrestreamRootProps> = ({
  children,
  title,
  date,
  subtitle,
  splashes = welcomeSplashes
}) => {
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
    <Root>
      <GridWrapper>
        <Inner>
          <PrestreamHeader title={title || 'twitch.tv/resir014'} date={date} subtitle={subtitle} />
          {children}
          <PrestreamFooterBlock>
            <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
              {state => (
                <PrestreamFooterParagraph state={state}>
                  {splashes[currentIndex]}
                </PrestreamFooterParagraph>
              )}
            </Transition>
          </PrestreamFooterBlock>
        </Inner>
      </GridWrapper>
    </Root>
  )
}

export default PrestreamRoot
