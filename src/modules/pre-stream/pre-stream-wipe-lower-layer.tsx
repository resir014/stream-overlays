'use client';

import * as React from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useAnimateStart } from './utils/use-animate-start';
import { PreStreamVariants } from './types';

interface PreStreamWipeLowerLayerProps {
  className?: string;
  variant?: PreStreamVariants;
}

export function PreStreamWipeLowerLayer({
  className,
  variant = 'pre-stream',
}: PreStreamWipeLowerLayerProps) {
  const [isAnimationEnded, setIsAnimationEnded] = React.useState(false);
  const isAnimationActive = useAnimateStart(variant);

  return (
    <>
      <div
        className={clsx(
          'absolute w-full h-full z-0',
          {
            '-translate-x-[97.5%]': !isAnimationEnded,
            'translate-x-0 shadow-drop-layers': isAnimationEnded,
          },
          className,
        )}
      />
      <Transition
        show={isAnimationActive}
        as={React.Fragment}
        afterEnter={() => setIsAnimationEnded(true)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-700 transform"
          enterFrom="-translate-x-[97.5%]"
          enterTo="translate-x-0 shadow-drop-layers"
          unmount={false}
        >
          <div className={clsx('absolute w-full h-full -translate-x-[97.5%] z-10', className)} />
        </Transition.Child>
      </Transition>
    </>
  );
}
