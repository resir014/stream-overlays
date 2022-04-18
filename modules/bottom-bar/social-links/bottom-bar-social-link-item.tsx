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
      <div className="inline-flex w-3 h-3 ml-2 rounded-full bg-chungking-blue-500" aria-hidden />
    </div>
  );
};
