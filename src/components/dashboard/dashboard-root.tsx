import { type PropsWithChildren } from 'react';

export function DashboardRoot({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col w-full h-full min-h-screen overflow-hidden bg-chungking-white text-chungking-black dark:bg-chungking-black dark:text-chungking-white">
      {children}
    </main>
  );
}
