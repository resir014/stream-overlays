/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';

import { DashboardHeader, DashboardRoot } from '~/components/dashboard';
import { LayoutType } from '.';

export const DashboardLayout: LayoutType = page => {
  return (
    <DashboardRoot>
      <DashboardHeader />
      {page}
    </DashboardRoot>
  );
};
