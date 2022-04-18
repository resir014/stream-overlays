import * as React from 'react';
import clsx from 'clsx';

interface BottomBarEventBoxProps {
  borderColorClassName?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const BottomBarEventBox: React.FC<BottomBarEventBoxProps> = ({
  icon,
  borderColorClassName,
}) => {
  return (
    <div className={clsx('flex flex-auto items-center h-6 pr-3')}>
      <div
        className={clsx(
          'inline-flex w-3 h-3 rounded-full mr-2',
          borderColorClassName ?? 'bg-chungking-blue-500',
        )}
        aria-hidden
      />
      {React.createElement(icon)}
      <div className="flex-auto ml-2 h-6" />
    </div>
  );
};
