import * as React from 'react';
import { Transition } from '@headlessui/react';
import { socialLinks } from './social-links';
import { useInterval } from '~/lib/hooks/use-interval';
import sleep from '~/lib/sleep';

export const TRANSITION_DURATION = 500;

export const BottomBarSocialLinks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [transitioning, setTransitioning] = React.useState(false);

  useInterval(async () => {
    const next = currentIndex + 1;
    setTransitioning(true);

    await sleep(1000);

    if (socialLinks[next]) {
      setCurrentIndex(next);
    } else {
      setCurrentIndex(0);
    }

    setTransitioning(false);
  }, 8000);

  return (
    <Transition
      show={!transitioning}
      className="px-3 border-r-2 border-chungking-blue-500"
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {socialLinks[currentIndex]}
    </Transition>
  );
};
