import * as React from 'react';
import { BottomBarEventBox } from './bottom-bar-event-box';
import DollarSign from '~/components/icons/DollarSign';
import Star from '~/components/icons/Star';
import TrendingUp from '~/components/icons/TrendingUp';

export const BottomBarEvents: React.FC = () => {
  return (
    <div className="flex flex-row items-center pl-12 pr-4 text-chungking-white">
      <BottomBarEventBox icon={DollarSign} />
      <BottomBarEventBox icon={Star} borderColorClassName="border-chungking-orange-400" />
      <BottomBarEventBox icon={TrendingUp} borderColorClassName="border-chungking-turquoise-500" />
    </div>
  );
};
