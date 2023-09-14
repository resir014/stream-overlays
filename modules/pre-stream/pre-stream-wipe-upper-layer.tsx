import * as React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';

export function PreStreamWipeUpperLayer({ isVisible = false }) {
  return (
    <Transition show={isVisible} className="relative w-full h-full">
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
        enter="transition ease-in-out duration-700 transform delay-500"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0 shadow-drop-layers"
      >
        <div className="absolute bg-chungking-blue-900 w-full h-full" />
      </Transition.Child>
      <Transition.Child
        as={React.Fragment}
        enter="transition ease-in-out duration-700 transform delay-700"
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
    </Transition>
  );
}
