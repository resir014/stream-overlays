import { css } from '@emotion/react';
import { Box, BoxProps, Stack, Text, theme } from '@resir014/chungking-react';
import * as React from 'react';
import { PrestreamVariants } from '~/interfaces/types';
import { useStreamSchedule } from '~/utils/useCurrentStream';

const getColor = (variant?: PrestreamVariants) => {
  switch (variant) {
    case 'prestream': {
      return theme.colors.blue[500];
    }
    case 'brb': {
      return theme.colors.purple[500];
    }
    case 'end': {
      return theme.colors.orange[500];
    }
    default: {
      return theme.colors.grey[500];
    }
  }
};

interface PrestreamDetailsProps extends BoxProps {
  text?: string;
  variant?: PrestreamVariants;
}

const PrestreamDetails: React.FC<PrestreamDetailsProps> = ({ text, variant, ...rest }) => {
  const { schedule } = useStreamSchedule();

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow="hidden"
      backgroundColor="black"
      color="white"
      {...rest}
    >
      <Box>
        <Box display="inline-block" backgroundColor={getColor(variant)} px="md" py="xxs">
          <Text
            variant="xl"
            display="block"
            fontFamily="monospace"
            color="white"
            fontWeight={700}
            css={css`
              text-transform: uppercase;
            `}
          >
            {text ?? "Today's Stream"}
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" flex="1 1 auto" px="md">
        <Stack spacing="xxs">
          <Text display="block" fontWeight={600} variant="3xl">
            {schedule?.streamName ?? 'Untitled Stream'}
          </Text>
          <Text display="block" variant="2xl">
            {schedule?.description ?? 'No description available.'}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default PrestreamDetails;
