/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';

import { DashboardHeader, DashboardRoot } from '~/components/dashboard';

export function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <DashboardRoot>
      <DashboardHeader />
      {children}
    </DashboardRoot>
  );
}
