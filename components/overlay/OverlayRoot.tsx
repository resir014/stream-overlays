import * as React from 'react';

const OverlayRoot: React.FC = ({ children }) => (
  <div className="flex flex-col w-full h-screen bg-transparent overflow-hidden">{children}</div>
);

export default OverlayRoot;
