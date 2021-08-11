import * as React from 'react';
import { Transition } from '@headlessui/react';
import { AlertSettings } from './types';

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
      id={id}
      show={isOpen}
      className="block relative w-full h-full overflow-hidden"
      enter="transition transform duration-300 ease-in-out-alerts"
      enterFrom="translate-y-[56px] opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition transform duration-800 ease-in-out-alerts"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-[56px] opacity-0"
      afterLeave={onRemove}
      unmount
      style={{ zIndex: index }}
    >
      {content}
    </Transition>
  );
};

export default AlertWrapper;
