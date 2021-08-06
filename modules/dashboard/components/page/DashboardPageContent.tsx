import * as React from 'react';

const DashboardPageContent: React.FC = ({ children }) => {
  return (
    <section className="flex-auto pt-6 px-6 pb-8">
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
};

export default DashboardPageContent;
