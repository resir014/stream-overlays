import clsx from 'clsx';
import { SVGProps, createElement } from 'react';

interface BottomBarEventBoxProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export function BottomBarEventBox({ icon }: BottomBarEventBoxProps) {
  return (
    <div className={clsx('flex flex-auto items-center h-6 pr-3')}>
      {createElement(icon, { className: 'h-6 w-6' })}
      <div className="flex-auto ml-2 h-6" />
    </div>
  );
}
