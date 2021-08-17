import * as React from 'react';
import { BottomBar } from '~/components/blocks/bottom-bar';

export const SceneWrapper: React.FC = ({ children }) => {
  return (
    <section className="grid grid-rows-scene-wrapper grid-cols-1 flex-auto w-full min-w-[450px] relative bg-chungking-black bg-opacity-75 z-0">
      <div className="flex items-center justify-between px-12 pt-6">{children}</div>
      <div className="bg-chungking-black" />
      <BottomBar variant="prestream" />
    </section>
  );
};
