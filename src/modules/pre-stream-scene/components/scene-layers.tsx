import type { PreStreamVariants } from '~/@pre-stream/shared/types';
import { TRPCProvider } from '~/lib/trpc/trpc-provider';
import type { PropsWithChildren } from 'react';
import { WipeUpperLayer } from './screen-wipe/wipe-upper-layer';
import { WipeLowerLayer } from './screen-wipe/wipe-lower-layer';

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
      <div className="grid w-full relative">
        <div className="absolute top-0 left-0 w-full h-full z-30">
          <WipeUpperLayer variant={variant}>
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[48px] rounded-full"
              src="/static/resir014-logo-2023.png"
              alt="resir014 logo"
              width={256}
              height={256}
            />
          </WipeUpperLayer>
        </div>
        {children}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <WipeLowerLayer className={getColorClassName(variant)} variant={variant} />
        </div>
      </div>
    </TRPCProvider>
  );
}
