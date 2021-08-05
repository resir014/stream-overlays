import * as React from 'react'

const DashboardRoot: React.FC = ({ children }) => (
  <main className="flex flex-col w-full h-full min-h-screen overflow-hidden bg-chungking-white text-chungking-black dark:bg-chungking-black dark:text-chungking-white">
    {children}
  </main>
)

export default DashboardRoot
