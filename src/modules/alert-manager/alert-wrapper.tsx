import { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { AlertSettings } from './types';

export interface AlertWrapperProps {
  id?: string;
  settings: Omit<AlertSettings, 'id' | 'onRemove' | 'dismissAfter'>;
  onRemove?: () => void;
  dismissAfter?: number;
}

export function AlertWrapper({
  id,
  settings: { index, content },
  onRemove,
  dismissAfter = 5000,
}: AlertWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
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
      enter="transition transform duration-[500ms] ease-in-out-alerts"
      enterFrom="translate-y-[56px] opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition transform duration-[500ms] ease-in-out-alerts"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-[56px] opacity-0"
      afterLeave={onRemove}
      unmount
      style={{ zIndex: index }}
    >
      {content}
    </Transition>
  );
}
