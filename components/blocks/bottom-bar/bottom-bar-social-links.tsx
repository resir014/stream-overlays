import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box } from '@resir014/chungking-react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import socialLinks from './socialLinks';
import { useInterval } from '~/lib/hooks/use-interval';
import sleep from '~/utils/sleep';

export const TRANSITION_DURATION = 500;

interface TransitionProps {
  state: TransitionStatus;
}

const Exited = css`
  opacity: 0;
`;

const Entered = css`
  opacity: 1;
`;

const transitionStyles = ({ state }: TransitionProps) => {
  switch (state) {
    case 'entering': {
      return Entered;
    }
    case 'entered': {
      return Entered;
    }
    case 'exiting': {
      return Exited;
    }
    case 'exited': {
      return Exited;
    }
    default: {
      return undefined;
    }
  }
};

const Container = styled(Box)<TransitionProps>`
  transition: all ${TRANSITION_DURATION}ms ease;
  opacity: 0;

  ${transitionStyles}
`;

const BottomBarSocialLinks: React.FC = () => {
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
    <Transition in={!transitioning} timeout={TRANSITION_DURATION}>
      {state => (
        <Container
          className="px-3"
          borderRight="2px solid"
          borderRightColor="blue.500"
          state={state}
        >
          {socialLinks[currentIndex]}
        </Container>
      )}
    </Transition>
  );
};

export default BottomBarSocialLinks;
