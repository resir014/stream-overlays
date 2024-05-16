import { type PropsWithChildren } from 'react';

export function DashboardSection({ children }: PropsWithChildren) {
  return <div className="space-y-6">{children}</div>;
}
