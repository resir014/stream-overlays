'use client';

import clsx from 'clsx';
import { Fragment } from 'react';
import type { PropsWithChildren } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import type { PreStreamVariants } from '~/@pre-stream/shared/types';
import { useAnimateStart } from '~/@pre-stream/shared/utils/use-animate-start';

export interface WipeUpperLayerProps {
  className?: string;
  variant?: PreStreamVariants;
}

export function WipeUpperLayer({
  className,
  variant,
  children,
}: PropsWithChildren<WipeUpperLayerProps>) {
  const isAnimationActive = useAnimateStart(variant);

  if (variant !== 'pre-stream') {
    return null;
  }

  return (
    <Transition show={isAnimationActive}>
      <div className={clsx('relative w-full h-full', className)}>
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-700 transform delay-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0 shadow-drop-layers"
        >
          <div className="absolute bg-chungking-grey-100 w-full h-full" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-700 transform delay-[600ms]"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0 shadow-drop-layers"
        >
          <div className="absolute bg-chungking-blue-900 w-full h-full" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-700 transform delay-[900ms]"
          enterFrom="scale-0"
          enterTo="scale-100"
        >
          {children}
        </TransitionChild>
      </div>
    </Transition>
  );
}
