import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, BoxProps, Text, variant as styledSystemVariant } from '@resir014/chungking-react'
import * as React from 'react'
import { Transition } from 'react-transition-group'
import { StreamlabsEventTypes } from '../types/streamlabs'
import alertsAudio from '../_data/alerts-audio.json'

interface AlertToastProps extends BoxProps {
  title: string
  recipient?: string
  content: string
  variant?: StreamlabsEventTypes
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

const Wrapper = styled(Box)<Pick<AlertToastProps, 'variant'>>`
  ${styledSystemVariant({
    variants: {
      donation: {
        backgroundColor: 'green.300',
        color: 'black'
      },
      follow: {
        backgroundColor: 'white',
        color: 'black'
      },
      subscription: {
        backgroundColor: 'orange.400',
        color: 'black'
      },
      resub: {
        backgroundColor: 'orange.400',
        color: 'black'
      },
      host: {
        backgroundColor: 'blue.500',
        color: 'white'
      },
      bits: {
        backgroundColor: '#9b45ff',
        color: 'white'
      },
      raid: {
        backgroundColor: 'magenta.500',
        color: 'white'
      }
    }
  })}
`

const AlertToast: React.FC<AlertToastProps> = ({
  title,
  recipient,
  variant = 'follow',
  content,
  ...rest
}) => {
  const [isMounted, setIsMounted] = React.useState(false)
  const audio = new Audio(alertsAudio[variant].src)

  React.useEffect(() => {
    audio.play()

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Wrapper
      display="flex"
      alignItems="center"
      width="100%"
      height={56}
      variant={variant}
      {...rest}
    >
      <Box display="flex" alignItems="center" height={56} pl={48} pr={24}>
        <Transition in={isMounted} timeout={ANIMATION_DURATION}>
          {state => (
            <TransitionText variant="2xl" fontWeight={700} className={state}>
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
              <TransitionText variant="2xl" className={state} delay={100}>
                {recipient}
              </TransitionText>
            )}
          </Transition>
        )}
        <Transition in={isMounted} timeout={ANIMATION_DURATION}>
          {state => (
            <TransitionText variant="2xl" className={state} delay={recipient ? 200 : 100}>
              {content}
            </TransitionText>
          )}
        </Transition>
      </Box>
    </Wrapper>
  )
}

export default AlertToast
