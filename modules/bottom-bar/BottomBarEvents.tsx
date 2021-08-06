import * as React from 'react';
import { Box } from '@resir014/chungking-react';
import BottomBarEventBox from './components/BottomBarEventBox';
import DollarSign from '~/components/icons/DollarSign';
import Star from '~/components/icons/Star';
import TrendingUp from '~/components/icons/TrendingUp';

const BottomBarEvents: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridArea="events"
      pl="xxl"
      pr="md"
      color="white"
    >
      <BottomBarEventBox icon={DollarSign} />
      <BottomBarEventBox icon={Star} borderColor="orange.400" />
      <BottomBarEventBox icon={TrendingUp} borderColor="turquoise.500" />
    </Box>
  );
};

export default BottomBarEvents;
