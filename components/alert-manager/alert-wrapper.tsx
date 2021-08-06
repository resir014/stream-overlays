import * as React from 'react';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import { AlertSettings } from './types';
import { ANIMATION_DURATION } from './constants';

import styles from './alert-wrapper.module.css';

interface AlertWrapperProps {
  id?: string;
  settings: Omit<AlertSettings, 'id' | 'onRemove' | 'dismissAfter'>;
  onRemove?: () => void;
  dismissAfter?: number;
}

const AlertWrapper: React.FC<AlertWrapperProps> = ({
  id,
  settings: { index, content },
  onRemove,
  dismissAfter = 5000,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeTimerRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  React.useEffect(() => {
    setIsOpen(true);

    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, dismissAfter);

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = undefined;
      }
    };
  }, [dismissAfter]);

  return (
    <Transition
      appear
      in={isOpen}
      timeout={{
        enter: ANIMATION_DURATION,
        exit: ANIMATION_DURATION + 500,
      }}
      unmountOnExit
      onExited={onRemove}
    >
      {state => (
        <div
          className={clsx('block relative w-full h-full overflow-hidden', styles.root)}
          style={{ zIndex: index }}
          data-toaster-state={state}
          id={id}
        >
          {content}
        </div>
      )}
    </Transition>
  );
};

export default AlertWrapper;
