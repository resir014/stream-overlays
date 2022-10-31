import * as React from 'react';

export function DashboardSection({ children }: React.PropsWithChildren) {
  return <div className="space-y-6">{children}</div>;
}
