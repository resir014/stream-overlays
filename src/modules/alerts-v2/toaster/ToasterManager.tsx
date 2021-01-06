/* eslint-disable react/sort-comp */

import { Box, ChungkingProvider } from '@resir014/chungking-react'
import * as React from 'react'
import { TransitionGroup } from 'react-transition-group'
import Notify from './Notify'
import { ToasterHandler, ToasterSettings } from './types'

interface ToasterManagerProps {
  bindNotify: (handler: ToasterHandler) => void
}

interface ToasterManagerState {
  toasts: ToasterSettings[]
}

export default class ToasterManager extends React.PureComponent<
  ToasterManagerProps,
  ToasterManagerState
> {
  public static currentCount = 0

  constructor(props: ToasterManagerProps) {
    super(props)

    props.bindNotify(this.toaster)

    this.state = {
      toasts: []
    }
  }

  private toaster = (settings: ToasterSettings) => {
    const instance = this.createToastInstance(settings)

    this.setState(previousState => {
      return {
        toasts: [instance, ...previousState.toasts]
      }
    })

    return instance
  }

  public render(): JSX.Element {
    const { toasts } = this.state
    return (
      <ChungkingProvider>
        <Box position="fixed" bottom={0} left={0} right={0}>
          <TransitionGroup>
            {toasts.map(({ id, ...props }) => {
              return <Notify key={id} id={id} onRemove={() => this.removeToaster(id)} {...props} />
            })}
          </TransitionGroup>
        </Box>
      </ChungkingProvider>
    )
  }

  private createToastInstance = (settings: ToasterSettings): ToasterSettings => {
    const { id, ...rest } = settings

    // eslint-disable-next-line no-plusplus
    const uniqueId = ++ToasterManager.currentCount
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
        toasts: previousState.toasts.filter(toast => toast.id !== id)
      }
    })
  }
}
