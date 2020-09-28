import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'

import useInterval from '~/utils/useInterval'
import sleep from '~/utils/sleep'
import welcomeSplashes from '~/utils/welcomeSplashes'

interface PrestreamLoopingTextProps {
  splashes?: string[]
}

export const TRANSITION_DURATION = 500

interface TextProps {
  state: TransitionStatus
}

const Exited = css`
  opacity: 0;
`

const Entered = css`
  opacity: 1;
`

const transitionStyles = ({ state }: TextProps) => {
  switch (state) {
    case 'entering': {
      return Entered
    }
    case 'entered': {
      return Entered
    }
    case 'exiting': {
      return Exited
    }
    case 'exited': {
      return Exited
    }
    default: {
      return undefined
    }
  }
}

const Text = styled('p')<TextProps>`
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  transition: all ${TRANSITION_DURATION}ms ease;
  opacity: 0;

  ${transitionStyles}
`

const PrestreamLoopingText: React.FC<PrestreamLoopingTextProps> = ({
  splashes = welcomeSplashes
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [transitioning, setTransitioning] = React.useState(false)

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
    <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
      {state => <Text state={state}>{splashes[currentIndex]}</Text>}
    </Transition>
  )
}

export default PrestreamLoopingText
