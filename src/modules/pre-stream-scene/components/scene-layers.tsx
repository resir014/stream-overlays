import { type PropsWithChildren } from 'react';
import { WipeLowerLayer } from './screen-wipe/wipe-lower-layer';
import { WipeUpperLayer } from './screen-wipe/wipe-upper-layer';
import { type PreStreamVariants } from '~/@pre-stream/shared/types';
import { TRPCProvider } from '~/lib/trpc/trpc-provider';

export interface SceneLayersProps {
  variant?: PreStreamVariants;
}

const getColorClassName = (variant?: PreStreamVariants) => {
  switch (variant) {
    case 'pre-stream': {
      return 'bg-chungking-blue-500';
    }
    case 'brb': {
      return 'bg-chungking-green-500';
    }
    case 'tech-issues': {
      return 'bg-chungking-magenta-500';
    }
    case 'end': {
      return 'bg-chungking-orange-500';
    }
    default: {
      return 'bg-chungking-blue-500';
    }
  }
};

export function SceneLayers({ variant, children }: PropsWithChildren<SceneLayersProps>) {
  return (
    <TRPCProvider>
      <div className="relative grid w-full">
        <div className="absolute left-0 top-0 z-30 h-full w-full">
          <WipeUpperLayer variant={variant}>
            <img
              className="absolute left-[50%] top-[50%] mt-[48px] translate-x-[-50%] translate-y-[-50%] rounded-full"
              src="/static/resir014-logo-2023.png"
              alt="resir014 logo"
              width={256}
              height={256}
            />
          </WipeUpperLayer>
        </div>
        {children}
        <div className="absolute left-0 top-0 z-10 h-full w-full">
          <WipeLowerLayer className={getColorClassName(variant)} variant={variant} />
        </div>
      </div>
    </TRPCProvider>
  );
}
