'use client';

import { Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useCallback, useState } from 'react';
import { type PreStreamVariants } from '~/@pre-stream/shared/types';
import { useAnimateStart } from '~/@pre-stream/shared/utils/use-animate-start';

export interface WipeLowerLayerProps {
  className?: string;
  variant?: PreStreamVariants;
}

export function WipeLowerLayer({ className, variant = 'pre-stream' }: WipeLowerLayerProps) {
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const isAnimationActive = useAnimateStart(variant);

  const renderTransition = useCallback(() => {
    if (variant !== 'pre-stream') {
      return null;
    }

    return (
      <Transition
        show={isAnimationActive}
        as={Fragment}
        beforeLeave={() => setIsAnimationEnded(false)}
        afterEnter={() => setIsAnimationEnded(true)}
      >
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-700 transform"
          enterFrom="-translate-x-[97.5%]"
          enterTo="translate-x-0 shadow-drop-layers"
          unmount={false}
        >
          <div className={clsx('absolute z-10 h-full w-full -translate-x-[97.5%]', className)} />
        </TransitionChild>
      </Transition>
    );
  }, [className, isAnimationActive, variant]);

  return (
    <>
      <div
        className={clsx(
          'absolute z-0 h-full w-full',
          {
            'translate-x-0 shadow-drop-layers': isAnimationEnded,
            '-translate-x-[97.5%]': !isAnimationEnded,
          },
          className
        )}
      />
      {renderTransition()}
    </>
  );
}
