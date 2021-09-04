import * as React from 'react';
import { ListItem } from '../../modules/dashboard/types';

import LinkListItem from './link-list-item';

export interface LinkListProps {
  items: ListItem[];
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
