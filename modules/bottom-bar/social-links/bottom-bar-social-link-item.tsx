import * as React from 'react';

interface BottomBarSocialLinkItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export const BottomBarSocialLinkItem: React.FC<BottomBarSocialLinkItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      {React.createElement(icon)}
      <span className="block ml-3 text-xl leading-none">{text}</span>
    </div>
  );
};
