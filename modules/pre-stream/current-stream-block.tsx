import * as React from 'react';
import { useCurrentStream } from '~/lib/pre-stream/stream-schedule';

export interface CurrentStreamBlockProps {
  header: string;
}

export function CurrentStreamBlock({ header }: CurrentStreamBlockProps) {
  const { currentStream } = useCurrentStream();

  return (
    <div className="flex flex-col items-start px-6">
      <div className="flex flex-1 items-end w-full">
        <p className="text-chungking-white text-3xl leading-[36px]">
          {currentStream?.stream_name ?? 'Untitled Stream'}
        </p>
      </div>
      <div className="flex py-2 w-full">
        <h1 className="text-chungking-white text-7xl leading-none max-w-[75%] font-bold">
          {header}
        </h1>
      </div>
      <div className="flex flex-1 items-start w-full">
        <p className="text-chungking-white text-3xl leading-[36px]">
          {currentStream?.description ?? 'No description available.'}
        </p>
      </div>
    </div>
  );
}
