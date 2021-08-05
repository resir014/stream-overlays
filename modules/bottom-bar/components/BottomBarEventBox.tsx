import * as React from 'react';
import { Box } from '@resir014/chungking-react';

interface BottomBarEventBoxProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  borderColor?: string;
}

const BottomBarEventBox: React.FC<BottomBarEventBoxProps> = ({ icon, borderColor }) => {
  return (
    <Box
      display="flex"
      flex="1 1 auto"
      alignItems="center"
      height={24}
      px="sm"
      borderLeft="2px solid"
      borderLeftColor={borderColor ?? 'blue.500'}
    >
      {React.createElement(icon)}
      <Box flex="1 1 auto" ml="md" height={24} />
    </Box>
  );
};

export default BottomBarEventBox;
