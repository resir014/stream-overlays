import { AlertKinds } from 'interfaces/types'
import { alertColors } from 'styles/variables'

export function getAlertHeader(kind: AlertKinds = 'donation') {
  switch (kind) {
    case 'raid': {
      return 'OH HECK WE GOT RAIDED???'
    }
    case 'host': {
      return 'Host!'
    }
    case 'sub': {
      return 'New Subscriber!'
    }
    case 'follow': {
      return 'Follow!'
    }
    case 'cheer': {
      return 'Bits!'
    }
    case 'donation': {
      return 'Donation!'
    }
    default: {
      return 'Donation!'
    }
  }
}

export function getAlertColor(kind: AlertKinds = 'donation') {
  return alertColors[kind]
}
