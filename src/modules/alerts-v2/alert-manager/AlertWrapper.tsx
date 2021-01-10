import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Box } from '@resir014/chungking-react'
import { Transition } from 'react-transition-group'
import { AlertSettings } from './types'
import { ANIMATION_DURATION } from './constants'

const ToastEnter = keyframes`
  0% {
    transform: translateY(56px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const ToastExit = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
    max-height: 56px;
  }

  100% {
    transform: translateY(56px);
    opacity: 0;
    max-height: 0;
  }
`

const Root = styled(Box)`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;

  &[data-toaster-state='entering'],
  &[data-toaster-state='entered'] {
    animation-fill-mode: both;
    animation-name: ${ToastEnter};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-toaster-state='exiting'] {
    animation-fill-mode: both;
    animation-name: ${ToastExit};
    animation-duration: ${ANIMATION_DURATION + 500}ms;
  }
  &[data-toaster-state='entered'] {
    right: 0;
    opacity: 1;
  }
`

const AlertWrapper: React.FC<AlertSettings> = ({
  id,
  index,
  onRemove,
  content,
  dismissAfter = 5000
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const closeTimerRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = undefined
    }
  }

  const startCloseTimer = () => {
    setIsOpen(true)

    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false)
    }, dismissAfter)
  }

  React.useEffect(() => {
    startCloseTimer()

    return () => {
      clearCloseTimer()
    }
  }, [])

  return (
    <Transition
      appear
      in={isOpen}
      timeout={{
        enter: ANIMATION_DURATION,
        exit: ANIMATION_DURATION + 500
      }}
      unmountOnExit
      onExited={onRemove}
    >
      {state => (
        <Root data-toaster-state={state} id={id} zIndex={index} overflow="hidden">
          {content}
        </Root>
      )}
    </Transition>
  )
}

export default AlertWrapper
