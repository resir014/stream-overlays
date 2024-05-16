import { type PropsWithChildren } from 'react';

export function DashboardPageContent({ children }: PropsWithChildren) {
  return (
    <section className="flex-auto pt-6 px-6 pb-8">
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
