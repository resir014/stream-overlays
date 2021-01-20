/* eslint-disable no-underscore-dangle */
import { Box } from '@resir014/chungking-react'
import * as React from 'react'
import { AlertToast } from './components'
import { alert, DEFAULT_DISMISS_DURATION } from './alert-manager'
import useStreamlabsEvents from './utils/useStreamlabsEvents'
import { StreamlabsEvent } from './types/streamlabs'

const dismissAfter = DEFAULT_DISMISS_DURATION

const StreamlabsAlerts: React.FC = () => {
  const { events, setEvents } = useStreamlabsEvents()
  const [stale, setStale] = React.useState(false)
  const [current, setCurrent] = React.useState<StreamlabsEvent | undefined>(undefined)

  const addEventToQueue = (eventData: StreamlabsEvent) => {
    setCurrent(eventData)
    setStale(false)
  }

  const onRemove = (id?: string) => {
    setStale(true)
    setCurrent(undefined)
    setEvents(prev => prev.filter(event => event.id !== id))
  }

  const handleToaster = (eventData: StreamlabsEvent) => {
    if (eventData.for !== 'twitch_account' && eventData.type === 'donation') {
      alert.sendAlert({
        id: eventData.id,
        content: (
          <AlertToast
            title="Donation"
            variant={eventData.type}
            recipient={`${eventData.message[0].name} (${eventData.message[0].formatted_amount})`}
            content={eventData.message[0].message}
          />
        ),
        dismissAfter,
        onRemove
      })
    }

    if (eventData.for === 'twitch_account') {
      switch (eventData.type) {
        case 'follow': {
          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Follow"
                variant={eventData.type}
                content={eventData.message[0].name}
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        case 'subscription': {
          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title={eventData.message[0].sub_plan === 'Prime' ? 'Prime Sub' : 'Subscriber'}
                variant={eventData.type}
                content={eventData.message[0].name}
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        case 'resub': {
          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Resub"
                recipient={`${eventData.message[0].name} (×${eventData.message[0].months})`}
                variant={eventData.type}
                content={eventData.message[0].message}
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        case 'host': {
          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Host"
                recipient={eventData.message[0].name}
                variant={eventData.type}
                content={`${eventData.message[0].viewers} viewers`}
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        case 'bits': {
          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Bits"
                recipient={`${eventData.message[0].name} (${eventData.message[0].amount})`}
                variant={eventData.type}
                content={eventData.message[0].message}
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        case 'raid': {
          alert.sendAlert({
            id: eventData.id,
            content: (
              <AlertToast
                title="Raid"
                recipient={eventData.message[0].name}
                variant={eventData.type}
                content={`${eventData.message[0].raiders} raiders`}
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        default: {
          // default case
          break
        }
      }
    }
  }

  React.useEffect(() => {
    console.log('current, stale', current, stale)
    if (!stale && current) {
      handleToaster(current)
    }
  }, [current, stale])

  React.useEffect(() => {
    const [recent] = events
    console.log('events.length, events', events.length, events)

    if (events.length !== 0) {
      setTimeout(() => {
        addEventToQueue(recent)
      }, (dismissAfter + 500) * (events.length - 1))
    } else {
      addEventToQueue(recent)
    }
  }, [events])

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      width="100%"
      height="100%"
      minHeight="100vh"
    />
  )
}

export default StreamlabsAlerts
