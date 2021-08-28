import { Box, BoxProps, Stack, Text, theme } from '@resir014/chungking-react';
import { format } from 'date-fns';
import { transparentize } from 'polished';
import * as React from 'react';
import usePrestreamClock from '../utils/usePrestreamClock';
import { PrestreamVariants } from '~/interfaces/types';

interface PrestreamIconProps extends BoxProps {
  variant?: PrestreamVariants;
  startH?: number;
  startM?: number;
}

const getColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return theme.colors.blue[300];
    }
    case 'brb': {
      return theme.colors.purple[300];
    }
    case 'end': {
      return theme.colors.orange[300];
    }
    default: {
      return theme.colors.grey[300];
    }
  }
};

const PrestreamClock: React.FC<PrestreamIconProps> = ({ variant, startH, startM, ...rest }) => {
  const { time, percentage } = usePrestreamClock(startH, startM);

  return (
    <Box
      className="text-white"
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="8px 1fr"
      gridTemplateAreas={`
        "bar"
        "clock-inner"
      `}
      backgroundColor={transparentize(0.25, theme.colors.black)}
      {...rest}
    >
      <Box display="flex" alignItems="center" gridArea="clock-inner" px="md">
        <Stack spacing="xxs">
          <Text display="block" variant="2xl">
            <Text display="inline-block" fontWeight={600} mr="sm">
              {format(time, 'EEEE')}
            </Text>
            <Text display="inline-block" color={getColor(variant)}>
              {format(time, 'dd MMMM yyyy')}
            </Text>
          </Text>
          <Text display="block" fontFamily="monospace" variant="5xl" fontWeight={700}>
            {format(time, 'HH:mm:ss')}
          </Text>
        </Stack>
      </Box>
      <Box
        gridArea="bar"
        position="relative"
        backgroundColor={transparentize(0.5, theme.colors.black)}
      >
        <Box
          position="absolute"
          backgroundColor={percentage >= 1 ? 'green.500' : getColor(variant)}
          top={0}
          bottom={0}
          left={0}
          style={{ width: `${(percentage * 100).toFixed(1)}%` }}
        />
      </Box>
    </Box>
  );
};

export default PrestreamClock;
