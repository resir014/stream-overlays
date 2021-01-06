/* eslint-disable no-console */
import { Box } from '@resir014/chungking-react'
import * as React from 'react'
import io from 'socket.io-client'
import { AlertToast } from './components'
import { toaster } from './toaster'

const StreamlabsAlerts: React.FC = () => {
  const handleSocketEvent = (eventData: any) => {
    if (eventData.for !== 'twitch_account' && eventData.type === 'donation') {
      toaster.notify({
        content: (
          <AlertToast
            title="Donation"
            recipient={`${eventData.message[0].name} (${eventData.message[0].formatted_amount})`}
            content={eventData.message[0].message}
            backgroundColor="green.300"
            color="black"
          />
        )
      })
    }

    if (eventData.for === 'twitch_account') {
      switch (eventData.type) {
        case 'follow': {
          toaster.notify({
            content: <AlertToast title="Follow" content={eventData.message[0].name} />
          })
          break
        }
        case 'subscription': {
          toaster.notify({
            content: (
              <AlertToast
                title={eventData.message[0].sub_plan === 'Prime' ? 'Prime Sub' : 'Subscriber'}
                content={eventData.message[0].name}
                backgroundColor="orange.400"
                color="black"
              />
            )
          })
          break
        }
        case 'resub': {
          toaster.notify({
            content: (
              <AlertToast
                title="Resub"
                recipient={`${eventData.message[0].name} (×${eventData.message[0].months})`}
                content={eventData.message[0].message}
                backgroundColor="orange.400"
                color="black"
              />
            )
          })
          break
        }
        case 'host': {
          toaster.notify({
            content: (
              <AlertToast
                title="Host"
                recipient={eventData.message[0].name}
                content={`${eventData.message[0].viewers} viewers`}
                backgroundColor="blue.500"
                color="white"
              />
            )
          })
          break
        }
        case 'bits': {
          toaster.notify({
            content: (
              <AlertToast
                title="Bits"
                recipient={`${eventData.message[0].name} (${eventData.message[0].formatted_amount})`}
                content={eventData.message[0].message}
                backgroundColor="#9b45ff"
                color="white"
              />
            )
          })
          break
        }
        case 'raid': {
          toaster.notify({
            content: (
              <AlertToast
                title="Raid"
                recipient={eventData.message[0].name}
                content={`${eventData.message[0].raiders} raiders`}
                backgroundColor="magenta.500"
                color="white"
              />
            )
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
