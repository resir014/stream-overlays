import * as React from 'react';

export const SceneWrapper: React.FC = ({ children }) => {
  return (
    <div className="grid grid-rows-scene-wrapper grid-cols-1 flex-1 w-full min-w-[450px] relative bg-chungking-black bg-opacity-75">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};
