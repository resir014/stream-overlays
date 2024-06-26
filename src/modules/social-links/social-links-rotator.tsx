'use client';

import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { useInterval } from '~/lib/hooks/use-interval';
import sleep from '~/lib/sleep';
import { socialLinksData } from './social-links';

export const TRANSITION_DURATION = 500;

export function SocialLinksRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useInterval(async () => {
    const next = currentIndex + 1;
    setTransitioning(true);

    await sleep(1000);

    if (socialLinksData[next]) {
      setCurrentIndex(next);
    } else {
      setCurrentIndex(0);
    }

    setTransitioning(false);
  }, 8000);

  return (
    <Transition
      show={!transitioning}
      className="px-3"
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {socialLinksData[currentIndex]}
    </Transition>
  );
}
