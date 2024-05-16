import { Home } from 'react-feather';

export function DashboardSidebar() {
  return (
    <aside className="border-r border-chungking-grey-100 dark:border-chungking-grey-900 py-6 w-16">
      <div className="flex flex-col items-center justify-center w-16 h-16 border-r-2 border-chungking-blue-500 bg-chungking-blue-500 bg-opacity-25">
        <Home />
      </div>
    </aside>
  );
}
