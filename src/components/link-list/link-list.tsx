import { LinkListItem, type LinkListItemProps } from './link-list-item';

export interface LinkListProps {
  items: LinkListItemProps[];
}

export function LinkList({ items }: LinkListProps) {
  return (
    <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, url }) => (
        <LinkListItem key={url} title={title} url={url} />
      ))}
    </ul>
  );
}
