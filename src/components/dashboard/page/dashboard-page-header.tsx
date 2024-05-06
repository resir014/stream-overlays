import * as React from 'react';

export interface DashboardPageHeaderProps {
  title: string;
  subtitle?: string;
}

export const DashboardPageHeader: React.FC<DashboardPageHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="pt-6 px-6 pb-4 border-b border-chungking-grey-100 dark:border-chungking-grey-900">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-4xl font-semibold">{title}</h1>
        {subtitle ? <p className="text-2xl">{subtitle}</p> : null}
      </div>
    </header>
  );
};

export default DashboardPageHeader;
