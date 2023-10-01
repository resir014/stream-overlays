import * as React from 'react';
import { Transition } from '@headlessui/react';

export function PreStreamWipeLowerLayer({ isVisible = false }) {
  return (
    <Transition show={isVisible} className="relative w-full h-full">
      <Transition.Child
        as={React.Fragment}
        enter="transition ease-in-out duration-700 transform"
        enterFrom="-translate-x-[90%]"
        enterTo="translate-x-0"
        unmount={false}
      >
        <div className="absolute bg-chungking-blue-500 w-full h-full -translate-x-[90%] shadow-drop-layers" />
      </Transition.Child>
    </Transition>
  );
}
