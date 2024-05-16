'use client';

import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  IconBits,
  IconExclamationMark,
  IconFollow,
  IconHeart,
  IconMoney,
  IconTV,
} from '~/components/icons';
import alertsAudio from '~/lib/data/alerts-audio';
import { AlertEventTypes } from '.';

interface AlertToastProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  recipient?: string;
  amount?: string;
  content?: string;
  variant?: AlertEventTypes;
}

function alertToastVariants(variant?: AlertEventTypes) {
  switch (variant) {
    case 'donation': {
      return { colors: 'bg-chungking-green-500 text-chungking-black', icon: IconMoney };
    }
    case 'follow': {
      return { colors: 'bg-chungking-black text-chungking-white', icon: IconFollow };
    }
    case 'subscription': {
      return { colors: 'bg-chungking-orange-400 text-chungking-black', icon: IconHeart };
    }
    case 'resub': {
      return { colors: 'bg-chungking-orange-400 text-chungking-black', icon: IconHeart };
    }
    case 'host': {
      return { colors: 'bg-chungking-blue-500 text-chungking-white', icon: IconTV };
    }
    case 'bits': {
      return { colors: 'bg-[#9b45ff] text-chungking-white', icon: IconBits };
    }
    case 'raid': {
      return { colors: 'bg-chungking-magenta-500 text-chungking-white', icon: IconExclamationMark };
    }
    default: {
      return { colors: 'bg-chungking-black text-chungking-white', icon: IconFollow };
    }
  }
}

export const AlertToast = React.forwardRef<HTMLDivElement, AlertToastProps>(
  ({ title, recipient, amount, variant = 'follow', content, ...rest }, ref) => {
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

    const currentVariant = React.useMemo(() => alertToastVariants(variant), [variant]);

    return (
      <div className={clsx('relative w-full h-[62px]', currentVariant.colors)} ref={ref} {...rest}>
        <div
          className={clsx(
            'flex items-center justify-center absolute w-full h-[62px] px-12',
            currentVariant.colors,
          )}
        >
          <div className="flex items-center flex-shrink-0 h-[40px] space-x-4 pr-4">
            {React.createElement(currentVariant.icon, {
              className: 'inline-flex w-6 h-6 rounded-full',
              'aria-hidden': true,
            })}
            <span className="text-2xl leading-10 font-bold">{title}</span>
          </div>
        </div>
        {recipient ? (
          <Transition
            show={isMounted}
            className={clsx(
              'flex items-center justify-center absolute w-full h-[62px] px-12 z-10',
              currentVariant.colors,
            )}
            enter="transition duration-300 ease-in-out-alerts delay-[1500ms]"
            enterFrom="opacity-0 translate-y-[62px]"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex items-center flex-shrink-0 h-[40px] space-x-10 pr-4">
              <span className="text-2xl leading-10">{recipient}</span>
              {amount ? <span className="text-2xl leading-10">({amount})</span> : null}
            </div>
          </Transition>
        ) : null}
        {content ? (
          <Transition
            show={isMounted}
            className={clsx(
              'flex items-center justify-center absolute w-full h-[62px] px-12 z-20',
              currentVariant.colors,
            )}
            enter={clsx(
              'transition duration-300 ease-in-out-alerts',
              recipient ? 'delay-[3000ms]' : 'delay-[1500ms]',
            )}
            enterFrom="opacity-0 translate-y-[62px]"
            enterTo="opacity-100 translate-y-0"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <span className="text-2xl leading-10 truncate">{content}</span>
          </Transition>
        ) : null}
      </div>
    );
  },
);

AlertToast.displayName = 'AlertToast';
