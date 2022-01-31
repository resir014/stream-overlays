import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import { getPrestreamAccentGradient, getPrestreamAccentColor } from './utils';
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

const UpcomingStreamsSkeleton: React.FC<Pick<UpcomingStreamsItemProps, 'variant'>> = ({
  variant = 'pre-stream',
}) => {
  return (
    <div className="flex flex-row items-center space-x-6">
      <div
        className={clsx(
          'flex items-center justify-center w-24 h-24 rounded-lg text-chungking-white text-center uppercase bg-gradient-to-br',
          getPrestreamAccentGradient(variant),
        )}
      >
        <div className="space-y-2">
          <div className="h-9 w-12 rounded-md bg-chungking-grey-500 bg-opacity-75" />
          <div className="h-5 w-12 rounded-md bg-chungking-grey-500 bg-opacity-75" />
        </div>
      </div>
      <div className="flex flex-col flex-1 text-chungking-white space-y-2">
        <div className="h-9 w-32 rounded-md bg-chungking-grey-500 bg-opacity-75" />
        <div className="h-5 w-96 rounded-md bg-chungking-grey-500 bg-opacity-75" />
      </div>
    </div>
  );
};

const UpcomingStreamsItem: React.FC<UpcomingStreamsItemProps> = ({
  date,
  stream_name,
  description,
  variant = 'pre-stream',
}) => {
  const parsedDate = React.useMemo(() => {
    if (date) {
      return new Date(date);
    }

    return null;
  }, [date]);

  return (
    <div className="flex flex-row items-center space-x-6">
      {parsedDate ? (
        <div
          className={clsx(
            'flex items-center justify-center w-24 h-24 rounded-lg text-chungking-white text-center uppercase bg-gradient-to-br',
            getPrestreamAccentGradient(variant),
          )}
        >
          <div className="space-y-2">
            <p className="text-4xl leading-none font-semibold">{format(parsedDate, 'dd')}</p>
            <p className="text-xl leading-none">{format(parsedDate, 'MMM')}</p>
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            'flex items-center justify-center w-24 h-24 rounded-lg text-chungking-white text-center uppercase bg-gradient-to-br',
            getPrestreamAccentGradient(variant),
          )}
        >
          <div className="space-y-2">
            <div className="h-9 w-12 rounded-md bg-chungking-grey-500 bg-opacity-75" />
            <div className="h-5 w-12 rounded-md bg-chungking-grey-500 bg-opacity-75" />
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1 text-chungking-white space-y-2">
        <h2 className="font-semibold text-4xl leading-none">{stream_name}</h2>
        <p className="text-xl leading-none">{description ?? 'No description available.'}</p>
      </div>
    </div>
  );
};

export const UpcomingStreamsBlock = React.forwardRef<HTMLDivElement, UpcomingStreamsBlockProps>(
  ({ className, variant = 'pre-stream', ...rest }, ref) => {
    const { currentStream } = useCurrentStream();
    const { upcomingStreams } = useUpcomingStreams({
      referenceDate: currentStream?.date,
      pageSize: 3,
    });

    const renderUpcomingStreams = () => {
      if (upcomingStreams) {
        return upcomingStreams.map(stream => {
          return <UpcomingStreamsItem key={stream.id} variant={variant} {...stream} />;
        });
      }

      return [
        <UpcomingStreamsSkeleton key="skeleton-1" variant={variant} />,
        <UpcomingStreamsSkeleton key="skeleton-2" variant={variant} />,
        <UpcomingStreamsSkeleton key="skeleton-3" variant={variant} />,
      ];
    };

    return (
      <div
        ref={ref}
        className={clsx('flex flex-col justify-end flex-1 h-full space-y-10', className)}
        {...rest}
      >
        <div className="flex flex-row items-center space-x-4 text-chungking-white">
          <h1 className="text-4xl leading-none font-bold">Upcoming Streams</h1>
          <div className="flex items-center h-9">
            <div className={clsx('block w-4 h-4 rounded-full', getPrestreamAccentColor(variant))} />
          </div>
        </div>
        <div className="space-y-6 flex-1">{renderUpcomingStreams()}</div>
        <div className="flex flex-row items-center text-chungking-white space-x-4">
          <p className="text-3xl leading-none font-bold">INFO</p>
          <div className={clsx('block w-4 h-4 rounded-full', getPrestreamAccentColor(variant))} />
          <p className="text-3xl leading-none">Schedules are subject to change.</p>
        </div>
      </div>
    );
  },
);

UpcomingStreamsBlock.displayName = 'UpcomingStreamsBlock';
