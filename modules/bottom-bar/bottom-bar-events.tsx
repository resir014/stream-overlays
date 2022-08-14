import * as React from 'react';
import DollarSign from '~/components/icons/DollarSign';
import Star from '~/components/icons/Star';
import TrendingUp from '~/components/icons/TrendingUp';
import { BottomBarEventBox } from './bottom-bar-event-box';

export const BottomBarEvents: React.FC = () => {
  return (
    <div className="flex flex-row items-center pl-12 pr-4 text-chungking-white">
      <BottomBarEventBox icon={DollarSign} />
      <BottomBarEventBox icon={Star} />
      <BottomBarEventBox icon={TrendingUp} />
    </div>
  );
};
