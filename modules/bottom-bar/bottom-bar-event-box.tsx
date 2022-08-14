import * as React from 'react';
import clsx from 'clsx';

interface BottomBarEventBoxProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const BottomBarEventBox: React.FC<BottomBarEventBoxProps> = ({ icon }) => {
  return (
    <div className={clsx('flex flex-auto items-center h-6 pr-3')}>
      {React.createElement(icon)}
      <div className="flex-auto ml-2 h-6" />
    </div>
  );
};
