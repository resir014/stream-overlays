/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { Box } from '@resir014/chungking-react'
import * as React from 'react'
import { AlertToast } from './components'
import { alert, DEFAULT_DISMISS_DURATION } from './alert-manager'
import useStreamlabsEvents from './utils/useStreamlabsEvents'

const dismissAfter = DEFAULT_DISMISS_DURATION

const StreamlabsAlerts: React.FC = () => {
  const { events, setEvents } = useStreamlabsEvents()
  const [stale, setStale] = React.useState(false)
  const [current, setCurrent] = React.useState<any | undefined>(undefined)

  const addEventToQueue = (eventData: any) => {
    setCurrent(eventData)
    setStale(false)
  }

  const onRemove = (id?: string) => {
    setStale(true)
    setCurrent(undefined)
    setEvents(prev => prev.filter(event => event.id !== id))
  }

  const handleToaster = (eventData: any) => {
    if (eventData.for !== 'twitch_account' && eventData.type === 'donation') {
      alert.sendAlert({
        id: eventData.id,
        content: (
          <AlertToast
            title="Donation"
            recipient={`${eventData.message[0].name} (${eventData.message[0].formatted_amount})`}
            content={eventData.message[0].message}
            backgroundColor="green.300"
            color="black"
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
                type={eventData.type}
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
                type={eventData.type}
                content={eventData.message[0].name}
                backgroundColor="orange.400"
                color="black"
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
                type={eventData.type}
                content={eventData.message[0].message}
                backgroundColor="orange.400"
                color="black"
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
                type={eventData.type}
                content={`${eventData.message[0].viewers} viewers`}
                backgroundColor="blue.500"
                color="white"
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
                type={eventData.type}
                content={eventData.message[0].message}
                backgroundColor="#9b45ff"
                color="white"
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
                type={eventData.type}
                content={`${eventData.message[0].raiders} raiders`}
                backgroundColor="magenta.500"
                color="white"
              />
            ),
            dismissAfter,
            onRemove
          })
          break
        }
        default: {
          // default case
          console.log(eventData)
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
