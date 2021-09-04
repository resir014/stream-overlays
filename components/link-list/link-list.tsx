import * as React from 'react';

import LinkListItem, { LinkListItemProps } from './link-list-item';

export interface LinkListProps {
  items: LinkListItemProps[];
}

export const LinkList: React.FC<LinkListProps> = ({ items }) => {
  return (
    <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, url }) => (
        <LinkListItem key={url} title={title} url={url} />
      ))}
    </ul>
  );
};
