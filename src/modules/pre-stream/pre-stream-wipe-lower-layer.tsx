'use client';

import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
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
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const isAnimationActive = useAnimateStart(variant);

  return (
    <>
      <div
        className={clsx(
          'absolute w-full h-full z-0',
          {
            'translate-x-0 shadow-drop-layers': isAnimationEnded,
            '-translate-x-[97.5%]': !isAnimationEnded,
          },
          className,
        )}
      />
      <Transition
        show={isAnimationActive}
        as={Fragment}
        beforeLeave={() => setIsAnimationEnded(false)}
        afterEnter={() => setIsAnimationEnded(true)}
      >
        <Transition.Child
          as={Fragment}
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
