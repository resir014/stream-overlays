import { type PropsWithChildren } from 'react';

export function DashboardSectionHeader({ children }: PropsWithChildren) {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
}
