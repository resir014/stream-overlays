import * as React from 'react';
import { Transition } from '@headlessui/react';
import { useClock } from '~/lib/hooks/use-clock';
import { useOverlayData } from '../overlay-data/use-overlay-data';

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
      <Transition show={isVisible}>
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
      </Transition>
    </div>
  );
}
