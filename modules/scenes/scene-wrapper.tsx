import * as React from 'react';
import { BottomBar } from '../bottom-bar';

export interface SceneWrapperProps {
  showClock?: boolean;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({ children, showClock }) => {
  return (
    <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1 w-full min-w-[450px] relative bg-chungking-black bg-opacity-75">
      <div className="flex flex-col">{children}</div>
      <div className="bg-chungking-black" />
      <BottomBar variant={showClock ? 'default' : 'prestream'} />
    </div>
  );
};
