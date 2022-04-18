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
        className={clsx('flex items-start w-full h-[64px] bg-chungking-black text-white')}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center flex-shrink-0 h-[40px] pl-12 pr-4">
          <Transition
            show={isMounted}
            className="inline-flex items-center space-x-3"
            enter="transition duration-300 ease-in-out-alerts"
            enterFrom="opacity-0 translate-y-0.5"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={clsx('inline-flex w-3 h-3 rounded-full', alertToastVariants(variant))}
              aria-hidden
            />
            <span className="text-2xl leading-10 font-bold">{title}</span>
          </Transition>
        </div>
        <div className="flex items-center flex-1 min-w-0 h-[40px] pr-16 pl-4">
          {recipient && (
            <Transition
              as="span"
              show={isMounted}
              className={clsx(
                'ml-8 first-of-type:ml-0',
                'text-2xl leading-10 font-normal truncate',
              )}
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
            className={clsx('ml-8 first-of-type:ml-0', 'text-2xl leading-10 font-normal truncate')}
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
