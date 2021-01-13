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

  private addAlerts = (instance: AlertSettings) => {
    this.setState(previousState => {
      return {
        alertQueue: [...previousState.alertQueue, instance]
      }
    })
  }

  private sendAlert = (settings: AlertSettings) => {
    const { alertQueue } = this.state
    const instance = this.createToastInstance(settings)

    if (alertQueue.length !== 0) {
      setTimeout(() => {
        this.addAlerts(instance)
      }, 5000 * alertQueue.length)
    } else {
      this.addAlerts(instance)
    }

    return instance
  }

  public render(): JSX.Element {
    const { alertQueue } = this.state
    return (
      <ChungkingProvider>
        <Box position="fixed" bottom={0} left={0} right={0}>
          <TransitionGroup>
            {alertQueue.map(({ id, onRemove, dismissAfter: _dismissAfter, ...settings }) => {
              return (
                <AlertWrapper
                  key={id}
                  id={id}
                  settings={settings}
                  onRemove={() => {
                    this.removeToaster(id)

                    if (onRemove) {
                      onRemove()
                    }
                  }}
                />
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
