/* eslint-disable react/sort-comp */

import { Box, ChungkingProvider } from '@resir014/chungking-react'
import * as React from 'react'
import { TransitionGroup } from 'react-transition-group'
import AlertWrapper from './AlertWrapper'
import { AlertHandler, AlertSettings } from './types'

interface AlertManagerProps {
  bindAlert: (handler: AlertHandler) => void
}

interface AlertManagerState {
  alertQueue: AlertSettings[]
}

export default class AlertManager extends React.PureComponent<
  AlertManagerProps,
  AlertManagerState
> {
  public static currentCount = 0

  constructor(props: AlertManagerProps) {
    super(props)

    props.bindAlert(this.sendAlert)

    this.state = {
      alertQueue: []
    }
  }

  private sendAlert = (settings: AlertSettings) => {
    const instance = this.createToastInstance(settings)

    this.setState(previousState => {
      return {
        alertQueue: [...previousState.alertQueue, instance]
      }
    })

    return instance
  }

  public render(): JSX.Element {
    const { alertQueue: toasts } = this.state
    return (
      <ChungkingProvider>
        <Box position="fixed" bottom={0} left={0} right={0}>
          <TransitionGroup>
            {toasts.map(({ id, ...props }) => {
              return (
                <AlertWrapper key={id} id={id} onRemove={() => this.removeToaster(id)} {...props} />
              )
            })}
          </TransitionGroup>
        </Box>
      </ChungkingProvider>
    )
  }

  private createToastInstance = (settings: AlertSettings): AlertSettings => {
    const { id, ...rest } = settings

    // eslint-disable-next-line no-plusplus
    const uniqueId = ++AlertManager.currentCount
    const generatedId = `${id || 'toaster'}-${uniqueId}`

    return {
      id: generatedId,
      index: uniqueId,
      ...rest
    }
  }

  private removeToaster = (id?: string | number) => {
    this.setState(previousState => {
      return {
        alertQueue: previousState.alertQueue.filter(toast => toast.id !== id)
      }
    })
  }
}
