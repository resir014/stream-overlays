'use client';

import { Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import type { PreStreamVariants } from '~/@pre-stream/shared/types';
import { useAnimateStart } from '~/@pre-stream/shared/utils/use-animate-start';
import { TRPCProvider } from '~/@pre-stream/shared/components/trpc-provider';

export interface WipeLowerLayerProps {
  className?: string;
  variant?: PreStreamVariants;
}

function WipeLowerLayerInner({ className, variant = 'pre-stream' }: WipeLowerLayerProps) {
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
        <TransitionChild
          as={Fragment}
          enter="transition ease-in-out duration-700 transform"
          enterFrom="-translate-x-[97.5%]"
          enterTo="translate-x-0 shadow-drop-layers"
          unmount={false}
        >
          <div className={clsx('absolute w-full h-full -translate-x-[97.5%] z-10', className)} />
        </TransitionChild>
      </Transition>
    </>
  );
}

export function WipeLowerLayer(props: WipeLowerLayerProps) {
  return (
    <TRPCProvider>
      <WipeLowerLayerInner {...props} />
    </TRPCProvider>
  );
}
