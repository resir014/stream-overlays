import clsx from 'clsx';
import * as React from 'react';

export interface SceneWrapperProps extends React.HTMLProps<HTMLDivElement> {
  darkBackground?: boolean;
}

export function SceneWrapper({
  children,
  className,
  darkBackground,
  ...rest
}: React.PropsWithChildren<SceneWrapperProps>) {
  return (
    <div
      className={clsx(
        'flex flex-col flex-1 w-full min-w-[450px] relative',
        darkBackground ? 'bg-chungking-black' : 'bg-chungking-black/50',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
