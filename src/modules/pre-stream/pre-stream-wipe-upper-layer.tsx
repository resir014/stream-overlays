import clsx from 'clsx';
import * as React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { useAnimateStart } from './utils/use-animate-start';
import { PreStreamVariants } from './types';

export interface PreStreamWipeUpperLayerProps {
  className?: string;
  variant?: PreStreamVariants;
}

export function PreStreamWipeUpperLayer({ className, variant }: PreStreamWipeUpperLayerProps) {
  const isAnimationActive = useAnimateStart(variant);

  return (
    <Transition show={isAnimationActive} className={clsx('relative w-full h-full', className)}>
      <Transition.Child
        as={React.Fragment}
        enter="transition ease-in-out duration-700 transform delay-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0 shadow-drop-layers"
      >
        <div className="absolute bg-chungking-grey-100 w-full h-full" />
      </Transition.Child>
      <Transition.Child
        as={React.Fragment}
        enter="transition ease-in-out duration-700 transform delay-[600ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0 shadow-drop-layers"
      >
        <div className="absolute bg-chungking-blue-900 w-full h-full" />
      </Transition.Child>
      {variant === 'pre-stream-cerveza' ? (
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-700 transform delay-[900ms]"
          enterFrom="scale-0"
          enterTo="scale-100"
        >
          <Image
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[48px] rounded-full"
            src="/static/cerveza-square.png"
            alt="resir014 logo"
            width={480}
            height={480}
          />
        </Transition.Child>
      ) : (
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-700 transform delay-[900ms]"
          enterFrom="scale-0"
          enterTo="scale-100"
        >
          <Image
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[48px] rounded-full"
            src="/static/resir014-logo-2023.png"
            alt="resir014 logo"
            width={256}
            height={256}
          />
        </Transition.Child>
      )}
    </Transition>
  );
}
