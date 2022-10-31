import * as React from 'react';
import { IconChart, IconDollarSign, IconStar } from '~/components/icons';
import { BottomBarEventBox } from './bottom-bar-event-box';

export function BottomBarEvents() {
  return (
    <div className="flex flex-row items-center pl-12 pr-4 text-chungking-white">
      <BottomBarEventBox icon={IconDollarSign} />
      <BottomBarEventBox icon={IconStar} />
      <BottomBarEventBox icon={IconChart} />
    </div>
  );
}
