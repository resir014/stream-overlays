import * as React from 'react';

export function DashboardSectionHeader({ children }: React.PropsWithChildren) {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
}
