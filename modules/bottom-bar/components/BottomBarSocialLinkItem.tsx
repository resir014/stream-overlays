import * as React from 'react';
import { Box, Text } from '@resir014/chungking-react';

interface BottomBarSocialLinkItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const BottomBarSocialLinkItem: React.FC<BottomBarSocialLinkItemProps> = ({ icon, text }) => {
  return (
    <Box display="flex" alignItems="center">
      {React.createElement(icon)}
      <Text display="block" ml="xs" variant="lg">
        {text}
      </Text>
    </Box>
  );
};

export default BottomBarSocialLinkItem;
