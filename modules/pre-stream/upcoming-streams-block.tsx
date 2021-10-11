import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import {
  ParsedCurrentStream,
  useCurrentStream,
  useUpcomingStreams,
} from '~/lib/pre-stream/stream-schedule';
import { PreStreamVariants } from '~/lib/pre-stream/types';

export interface UpcomingStreamsBlockProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: PreStreamVariants;
}

interface UpcomingStreamsItemProps extends ParsedCurrentStream {
  variant?: PreStreamVariants;
}

const renderGradientColor = (type: PreStreamVariants) => {
  switch (type) {
    case 'pre-stream': {
      return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
    }
    case 'brb': {
      return 'from-[rgba(0,57,134,0.75)] to-[rgba(31,199,145,0.75)]';
    }
    case 'end': {
      return 'from-[rgba(134,0,0,0.75)] to-[rgba(203,137,29,0.75)]';
    }
    default: {
      return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
    }
  }
};

const UpcomingStreamsItem: React.FC<UpcomingStreamsItemProps> = ({
  id,
  date,
  stream_name,
  variant = 'pre-stream',
}) => {
  const parsedDate = React.useMemo(() => {
    if (date) {
      return new Date(date);
    }

    return null;
  }, [date]);

  return (
    <div
      key={id}
      className={clsx(
        'flex flex-col bg-opacity-25 rounded-lg bg-gradient-to-br',
        renderGradientColor(variant),
      )}
    >
      {parsedDate && (
        <div className="px-6 pt-6 text-chungking-white">
          <p className="text-xl leading-none uppercase font-medium">
            {format(parsedDate, 'eeee | HH:mm')}
          </p>
        </div>
      )}
      <div className="flex flex-row items-end flex-1 px-6 py-6 text-chungking-white">
        <div className="space-y-1">
          <h2 className="font-semibold text-4xl leading-none">{stream_name}</h2>
        </div>
      </div>
    </div>
  );
};

export const UpcomingStreamsBlock = React.forwardRef<HTMLDivElement, UpcomingStreamsBlockProps>(
  ({ className, variant = 'pre-stream', ...rest }, ref) => {
    const { currentStream } = useCurrentStream();
    const { upcomingStreams } = useUpcomingStreams({
      referenceDate: currentStream?.date,
      pageSize: 2,
    });

    return (
      <div
        ref={ref}
        className={clsx('grid grid-rows-2 gap-6 w-full max-w-lg h-full', className)}
        {...rest}
      >
        {upcomingStreams?.map(stream => {
          return <UpcomingStreamsItem key={stream.id} variant={variant} {...stream} />;
        })}
      </div>
    );
  },
);

UpcomingStreamsBlock.displayName = 'UpcomingStreamsBlock';
