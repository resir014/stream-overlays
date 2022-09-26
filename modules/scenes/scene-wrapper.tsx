import clsx from 'clsx';
import * as React from 'react';

export interface SceneWrapperProps extends React.HTMLProps<HTMLDivElement> {
  darkBackground?: boolean;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({
  children,
  className,
  darkBackground,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'grid grid-rows-scene-wrapper grid-cols-1 flex-1 w-full min-w-[450px] relative',
        darkBackground ? 'bg-chungking-black' : 'bg-chungking-black/75',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
