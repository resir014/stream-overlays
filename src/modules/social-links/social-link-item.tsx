import * as React from 'react';

interface SocialLinkItemProps extends React.ComponentPropsWithoutRef<'div'> {
  text: string;
}

export const SocialLinkItem = React.forwardRef<HTMLSpanElement, SocialLinkItemProps>(
  ({ text, ...rest }, ref) => {
    return (
      <span ref={ref} {...rest}>
        {text}
      </span>
    );
  },
);

SocialLinkItem.displayName = 'SocialLinkItem';
