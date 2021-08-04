import { Transition } from '@headlessui/react'
import { BoxProps } from '@resir014/chungking-react'
import clsx from 'clsx'
import * as React from 'react'
import { StreamlabsEventTypes } from '../types/streamlabs'
import alertsAudio from '../_data/alerts-audio.json'

interface AlertToastProps extends BoxProps {
  title: string
  recipient?: string
  content: string
  variant?: StreamlabsEventTypes
}

function alertToastVariants(variant?: StreamlabsEventTypes) {
  switch (variant) {
    case 'donation': {
      return 'bg-chungking-green-300 text-chungking-black'
    }
    case 'follow': {
      return 'bg-chungking-white text-chungking-black'
    }
    case 'subscription': {
      return 'bg-chungking-orange-400 text-chungking-black'
    }
    case 'resub': {
      return 'bg-chungking-orange-400 text-chungking-black'
    }
    case 'host': {
      return 'bg-chungking-blue-500 text-chungking-white'
    }
    case 'bits': {
      return 'bg-chungking-[#9b45ff] text-chungking-white'
    }
    case 'raid': {
      return 'bg-chungking-magenta-500 text-chungking-white'
    }
    default: {
      return 'bg-chungking-white text-chungking-black'
    }
  }
}

const AlertToast: React.FC<AlertToastProps> = ({
  title,
  recipient,
  variant = 'follow',
  content,
  ...rest
}) => {
  const [isMounted, setIsMounted] = React.useState(false)
  const audio = new Audio(alertsAudio[variant].src)

  React.useEffect(() => {
    audio.play()

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={clsx('flex items-center w-full h-14', alertToastVariants(variant))} {...rest}>
      <div className="flex items-center h-14 pl-12 pr-6">
        <Transition
          as="span"
          show={isMounted}
          className="text-2xl font-bold"
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {title}
        </Transition>
      </div>
      <div className="flex items-center flex-auto h-14 pl-6 pr-12 truncate">
        {recipient && (
          <Transition
            as="span"
            show={isMounted}
            className={clsx('ml-12 first-of-type:ml-0', 'text-2xl font-normal')}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {recipient}
          </Transition>
        )}
        <Transition
          as="span"
          show={isMounted}
          className={clsx('ml-12 first-of-type:ml-0', 'text-2xl font-normal')}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {content}
        </Transition>
      </div>
    </div>
  )
}

export default AlertToast
