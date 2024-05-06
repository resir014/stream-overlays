import * as React from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';

interface PreStreamWipeLowerLayerProps {
  className?: string;
  isVisible?: boolean;
}

export function PreStreamWipeLowerLayer({
  className,
  isVisible = false,
}: PreStreamWipeLowerLayerProps) {
  return (
    <>
      <div className={clsx('absolute w-full h-full -translate-x-[97.5%] z-0', className)} />
      <Transition show={isVisible} as={React.Fragment}>
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
