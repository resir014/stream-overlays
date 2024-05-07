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
  const isAnimationActive = useAnimateStart(variant);

  return (
    <>
      <div className={clsx('absolute w-full h-full -translate-x-[97.5%] z-0', className)} />
      <Transition show={isAnimationActive} as={React.Fragment}>
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
