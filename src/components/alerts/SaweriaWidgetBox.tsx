import * as React from 'react'
import toast from 'toasted-notes'

import Alert from './Alert'

const saweriaAlertURL = `https://api.saweria.co/stream?channel=donation.${process.env.NEXT_PUBLIC_SAWERIA_STREAM_KEY}`

const SaweriaAlerts: React.FC = () => {
  const [listening, setListening] = React.useState(false)
  const audio = new Audio('/static/audio/91926__tim-kahn__ding-jVE.wav')
  const eventSource = saweriaAlertURL ? new EventSource(saweriaAlertURL) : undefined

  const handleMessage = (e: MessageEvent) => {
    const { data } = JSON.parse(e.data)

    audio.play()

    toast.notify(
      () => {
        return (
          <Alert
            kind="donation"
            donatee={data.donatee}
            amount={data.amount}
            message={data.message}
          />
        )
      },
      {
        duration: 5000,
        position: 'bottom-right'
      }
    )
  }

  React.useEffect(() => {
    if (eventSource && !listening) {
      eventSource.addEventListener<any>('donations', handleMessage)

      setListening(true)
    }

    return () => {
      if (eventSource && listening) {
        eventSource.removeEventListener<any>('donations', handleMessage)

        setListening(false)
      }
    }
  }, [listening])

  return null
}

export default SaweriaAlerts
