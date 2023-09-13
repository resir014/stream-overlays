import * as React from 'react';
import { Transition } from '@headlessui/react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '../overlay-data/use-overlay-data';
import Image from 'next/image';

export function PreStreamWipeStinger() {
  const time = useClock();
  const { overlayData } = useOverlayData();

  const streamStart = React.useMemo(
    () => (overlayData?.streamStart ? new Date(overlayData.streamStart) : undefined),
    [overlayData?.streamStart],
  );

  const isVisible = React.useMemo(() => {
    if (streamStart) {
      return time.toISOString() >= streamStart.toISOString();
    }

    return false;
  }, [streamStart, time]);

  console.log(isVisible);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <Transition show={isVisible} className="relative w-full h-full">
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-500 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
        >
          <div className="absolute bg-chungking-grey-100 w-[1792px] h-full shadow-drop-layers" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-500 transform delay-100"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
        >
          <div className="absolute bg-chungking-blue-500 w-[1440px] h-full shadow-drop-layers" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-500 transform delay-200"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
        >
          <div className="absolute bg-chungking-blue-900 w-[1280px] h-full shadow-drop-layers" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-500 transform delay-500"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
        >
          <Image
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[48px] rounded-full"
            src="/static/resir014-logo-2023.png"
            alt="resir014 logo"
            width={256}
            height={256}
          />
        </Transition.Child>
      </Transition>
    </div>
  );
}
