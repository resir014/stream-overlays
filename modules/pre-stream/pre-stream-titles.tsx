import * as React from 'react';

export interface PreStreamTitlesProps {
  header: string;
  description?: string;
}

export function PreStreamTitles({ header, description }: PreStreamTitlesProps) {
  return (
    <div className="flex flex-row items-center w-full h-full px-12">
      <div className="space-y-2">
        <h1 className="text-chungking-white text-7xl leading-none font-bold">{header}</h1>
        {description ? (
          <p className="text-chungking-white text-3xl leading-[36px]">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
