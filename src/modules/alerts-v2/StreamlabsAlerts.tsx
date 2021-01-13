/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { Box } from '@resir014/chungking-react'
import * as React from 'react'
import io from 'socket.io-client'
import { AlertToast } from './components'
import { alert, DEFAULT_DISMISS_DURATION } from './alert-manager'

const dismissAfter = DEFAULT_DISMISS_DURATION

const StreamlabsAlerts: React.FC = () => {
  const handleSocketEvent = (eventData: any) => {
    if (eventData.for !== 'twitch_account' && eventData.type === 'donation') {
      alert.sendAlert({
        id: eventData.message[0]._id,
        content: (
          <AlertToast
            title="Donation"
            recipient={`${eventData.message[0].name} (${eventData.message[0].formatted_amount})`}
            content={eventData.message[0].message}
            backgroundColor="green.300"
            color="black"
          />
        ),
        dismissAfter
      })
    }

    if (eventData.for === 'twitch_account') {
      switch (eventData.type) {
        case 'follow': {
          alert.sendAlert({
            id: eventData.message[0]._id,
            content: (
              <AlertToast
                title="Follow"
                type={eventData.type}
                content={eventData.message[0].name}
              />
            ),
            dismissAfter
          })
          break
        }
        case 'subscription': {
          alert.sendAlert({
            id: eventData.message[0]._id,
            content: (
              <AlertToast
                title={eventData.message[0].sub_plan === 'Prime' ? 'Prime Sub' : 'Subscriber'}
                type={eventData.type}
                content={eventData.message[0].name}
                backgroundColor="orange.400"
                color="black"
              />
            ),
            dismissAfter
          })
          break
        }
        case 'resub': {
          alert.sendAlert({
            id: eventData.message[0]._id,
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
            dismissAfter
          })
          break
        }
        case 'host': {
          alert.sendAlert({
            id: eventData.message[0]._id,
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
            dismissAfter
          })
          break
        }
        case 'bits': {
          alert.sendAlert({
            id: eventData.message[0]._id,
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
            dismissAfter
          })
          break
        }
        case 'raid': {
          alert.sendAlert({
            id: eventData.message[0]._id,
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
            dismissAfter
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
    const client = io(
      `https://sockets.streamlabs.com?token=${process.env.NEXT_PUBLIC_STREAMLABS_API_TOKEN}`,
      {
        transports: ['websocket']
      }
    )

    client.on('event', handleSocketEvent)

    return () => {
      client.off('event', handleSocketEvent)
    }
  }, [])

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
