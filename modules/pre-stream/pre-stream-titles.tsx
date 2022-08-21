import * as React from 'react';

export interface PreStreamTitlesProps {
  header: string;
  description?: string;
}

export function PreStreamTitles({ header, description }: PreStreamTitlesProps) {
  return (
    <div className="flex flex-row items-center w-full h-full px-12">
      <div>
        <h1 className="text-chungking-white text-[128px] leading-tight font-bold">{header}</h1>
        {description ? (
          <p className="text-chungking-white text-[48px] leading-tight">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
