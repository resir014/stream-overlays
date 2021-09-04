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
    <div
      className={clsx(
        'flex flex-auto items-center h-6 px-3 border-l-2',
        borderColorClassName ?? 'border-chungking-blue-500',
      )}
    >
      {React.createElement(icon)}
      <div className="flex-auto ml-4 h-6" />
    </div>
  );
};
