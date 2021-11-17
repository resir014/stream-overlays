/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';

import { LayoutType } from '.';
import { DashboardHeader, DashboardRoot } from '~/components/dashboard';

export const DashboardLayout: LayoutType = page => {
  return (
    <DashboardRoot>
      <DashboardHeader />
      {page}
    </DashboardRoot>
  );
};
