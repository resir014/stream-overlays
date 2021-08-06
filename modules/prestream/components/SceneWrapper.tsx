import { Box, theme } from '@resir014/chungking-react';
import { transparentize } from 'polished';
import * as React from 'react';
import { BottomBar } from '~/components/blocks/bottom-bar';

const SceneWrapper: React.FC = ({ children }) => {
  return (
    <Box
      as="section"
      display="grid"
      gridTemplateRows="1fr 56px auto"
      gridTemplateColumns="1fr"
      gridTemplateAreas={`
      "content"
      "alerts"
      "bottom-bar"
    `}
      flex="1 1 auto"
      width="100%"
      minWidth={450}
      position="relative"
      fontSize="24px"
      backgroundColor={transparentize(0.25, theme.colors.black)}
      color="white"
      zIndex={0}
    >
      <div className="flex items-center justify-between px-12 pt-6">{children}</div>
      <div className="bg-chungking-black" />
      <BottomBar variant="prestream" />
    </Box>
  );
};

export default SceneWrapper;
