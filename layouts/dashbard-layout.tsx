/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';

import { DashboardHeader, DashboardRoot } from '~/components/dashboard';

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <DashboardRoot>
      <DashboardHeader />
      {children}
    </DashboardRoot>
  );
};

DashboardLayout.displayName = 'DashboardLayout';
