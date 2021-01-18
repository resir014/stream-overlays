import * as React from 'react'
import io from 'socket.io-client'

interface ReturnType {
  events: any[]
  setEvents: React.Dispatch<React.SetStateAction<any[]>>
}

export default function useStreamlabsEvents(): ReturnType {
  const [events, setEvents] = React.useState<any[]>([])

  const addEvents = (eventData: any) => {
    setEvents(prev => [eventData, ...prev])
  }

  const handleSocketEvent = (eventData: any) => {
    addEvents(eventData)
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

  return { events, setEvents }
}
