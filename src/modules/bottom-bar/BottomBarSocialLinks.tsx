import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Transition } from 'react-transition-group'
import { TransitionStatus } from 'react-transition-group/Transition'

import useInterval from '~/utils/useInterval'
import sleep from '~/utils/sleep'
import { Box } from '~/components/chungking-core'
import socialLinks from './socialLinks'

export const TRANSITION_DURATION = 500

interface TransitionProps {
  state: TransitionStatus
}

const Exited = css`
  opacity: 0;
`

const Entered = css`
  opacity: 1;
`

const transitionStyles = ({ state }: TransitionProps) => {
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

const Container = styled(Box)<TransitionProps>`
  transition: all ${TRANSITION_DURATION}ms ease;
  opacity: 0;

  ${transitionStyles}
`

const BottomBarSocialLinks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [transitioning, setTransitioning] = React.useState(false)

  useInterval(() => {
    const getSplashIndex = async () => {
      const next = currentIndex + 1
      setTransitioning(true)

      await sleep(1000)

      if (!socialLinks[next]) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(next)
      }

      setTransitioning(false)
    }

    getSplashIndex()
  }, 8000)

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gridArea="clock"
      py="xs"
      px="xxl"
    >
      <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
        {state => (
          <Container px="sm" borderRight="2px solid" borderRightColor="blue.500" state={state}>
            {socialLinks[currentIndex]}
          </Container>
        )}
      </Transition>
    </Box>
  )
}

export default BottomBarSocialLinks
