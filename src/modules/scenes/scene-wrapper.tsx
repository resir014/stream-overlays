import clsx from 'clsx';
import { HTMLProps, PropsWithChildren } from 'react';

export interface SceneWrapperProps extends HTMLProps<HTMLDivElement> {
  darkBackground?: boolean;
  transparent?: boolean;
}

export function SceneWrapper({
  children,
  className,
  darkBackground,
  transparent,
  ...rest
}: PropsWithChildren<SceneWrapperProps>) {
  return (
    <div
      className={clsx(
        'flex flex-col flex-1 w-full min-w-[450px] relative',
        transparent ? undefined : darkBackground ? 'bg-chungking-black' : 'bg-chungking-black/50',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
