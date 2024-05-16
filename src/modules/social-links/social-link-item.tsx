import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface SocialLinkItemProps extends ComponentPropsWithoutRef<'div'> {
  text: string;
}

export const SocialLinkItem = forwardRef<HTMLSpanElement, SocialLinkItemProps>(
  ({ text, ...rest }, ref) => {
    return (
      <span ref={ref} {...rest}>
        {text}
      </span>
    );
  },
);

SocialLinkItem.displayName = 'SocialLinkItem';
