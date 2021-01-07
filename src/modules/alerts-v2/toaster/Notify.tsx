import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Box } from '@resir014/chungking-react'
import { Transition } from 'react-transition-group'
import { ToasterSettings } from './types'

const ANIMATION_DURATION = 500

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
    animation-duration: ${ANIMATION_DURATION}ms;
  }
  &[data-toaster-state='entered'] {
    right: 0;
    opacity: 1;
  }
`

interface ToasterState {
  isOpen?: boolean
}

export default class Notify extends React.PureComponent<ToasterSettings, ToasterState> {
  private closeTimer: number | null = null

  static defaultProps: Partial<ToasterSettings> = {
    dismissAfter: 5000
  }

  constructor(props: ToasterSettings) {
    super(props)

    this.state = {
      isOpen: true
    }
  }

  public componentDidMount(): void {
    this.startCloseTimer()
  }

  public componentWillUnmount(): void {
    this.clearCloseTimer()
  }

  private startCloseTimer = () => {
    const { dismissAfter } = this.props
    this.closeTimer = setTimeout(() => {
      this.close()
    }, dismissAfter)
  }

  private clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  private close = () => {
    this.clearCloseTimer()
    this.setState({
      isOpen: false
    })
  }

  public render(): JSX.Element {
    const { id, index, onRemove, content } = this.props
    const { isOpen } = this.state

    return (
      <Transition
        appear
        in={isOpen}
        timeout={{
          enter: ANIMATION_DURATION + 100,
          exit: ANIMATION_DURATION + 400
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
}
