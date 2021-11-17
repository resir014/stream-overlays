import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import { AlertEventTypes } from '.';
import alertsAudio from '~/lib/data/alerts-audio';

interface AlertToastProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  recipient?: string;
  content: string;
  variant?: AlertEventTypes;
}

function alertToastVariants(variant?: AlertEventTypes) {
  switch (variant) {
    case 'donation': {
      return 'bg-chungking-green-300 text-chungking-black';
    }
    case 'follow': {
      return 'bg-chungking-white text-chungking-black';
    }
    case 'subscription': {
      return 'bg-chungking-orange-400 text-chungking-black';
    }
    case 'resub': {
      return 'bg-chungking-orange-400 text-chungking-black';
    }
    case 'host': {
      return 'bg-chungking-blue-500 text-chungking-white';
    }
    case 'bits': {
      return 'bg-[#9b45ff] text-chungking-white';
    }
    case 'raid': {
      return 'bg-chungking-magenta-500 text-chungking-white';
    }
    default: {
      return 'bg-chungking-white text-chungking-black';
    }
  }
}

export const AlertToast = React.forwardRef<HTMLDivElement, AlertToastProps>(
  ({ title, recipient, variant = 'follow', content, ...rest }, ref) => {
    const [isMounted, setIsMounted] = React.useState(false);
    const audio = React.useMemo(
      () => (alertsAudio[variant]?.src ? new Audio(alertsAudio[variant]?.src) : undefined),
      [variant],
    );

    React.useEffect(() => {
      void audio?.play();

      const timeout = setTimeout(() => {
        setIsMounted(true);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }, [audio]);

    return (
      <div
        className={clsx('flex items-center w-full h-14', alertToastVariants(variant))}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center h-14 pl-12 pr-6">
          <Transition
            as="span"
            show={isMounted}
            className="text-2xl font-bold"
            enter="transition duration-300 ease-in-out-alerts"
            enterFrom="opacity-0 translate-y-0.5"
            enterTo="opacity-100 translate-y-0"
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
              enter="transition duration-300 ease-in-out-alerts delay-100"
              enterFrom="opacity-0 translate-y-0.5"
              enterTo="opacity-100 translate-y-0"
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
            enter={clsx(
              'transition duration-300 ease-in-out-alerts',
              recipient ? 'delay-200' : 'delay-100',
            )}
            enterFrom="opacity-0 translate-y-0.5"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {content}
          </Transition>
        </div>
      </div>
    );
  },
);

AlertToast.displayName = 'AlertToast';
