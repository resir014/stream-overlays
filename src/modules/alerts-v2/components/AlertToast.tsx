import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, BoxProps, Text } from '@resir014/chungking-react'
import * as React from 'react'
import { Transition } from 'react-transition-group'

interface AlertToastProps extends BoxProps {
  title: string
  recipient?: string
  content: string
}

const ANIMATION_DURATION = 300

const TextEnter = keyframes`
  0% {
    transform: translateY(8px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

interface TransitionProps {
  delay?: number
}

const TransitionText = styled(Text)<TransitionProps>`
  transform: translateY(8px);
  opacity: 0;

  &.entering,
  &.entered {
    animation-fill-mode: both;
    animation-name: ${TextEnter};
    animation-duration: ${ANIMATION_DURATION}ms;
    animation-delay: ${props => props.delay || 0}ms;
  }

  &.entered {
    transform: translateY(0);
    opacity: 1;
  }
`

const AlertToast: React.FC<AlertToastProps> = ({ title, recipient, content, ...rest }) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height={56}
      backgroundColor="white"
      color="black"
      {...rest}
    >
      <Box display="flex" alignItems="center" height={56} pl={48} pr={24}>
        <Transition in={isMounted} timeout={ANIMATION_DURATION}>
          {state => (
            <TransitionText variant={600} fontWeight={700} className={state}>
              {title}
            </TransitionText>
          )}
        </Transition>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        height={56}
        flex="1 1 auto"
        pl={24}
        pr={48}
        css={css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          > *:not(:first-of-type) {
            margin-left: 48px;
          }
        `}
      >
        {recipient && (
          <Transition in={isMounted} timeout={ANIMATION_DURATION}>
            {state => (
              <TransitionText variant={600} className={state} delay={100}>
                {recipient}
              </TransitionText>
            )}
          </Transition>
        )}
        <Transition in={isMounted} timeout={ANIMATION_DURATION}>
          {state => (
            <TransitionText variant={600} className={state} delay={recipient ? 200 : 100}>
              {content}
            </TransitionText>
          )}
        </Transition>
      </Box>
    </Box>
  )
}

export default AlertToast
