import Link from 'next/link';
import * as React from 'react';

export interface LinkListItemProps {
  title: string;
  url: string;
}

const LinkListItem: React.FC<LinkListItemProps> = ({ url, title }) => {
  return (
    <li className="group relative p-4 border rounded-lg hover:shadow-md border-chungking-grey-100 hover:bg-chungking-grey-100 dark:border-chungking-grey-900 dark:hover:bg-chungking-grey-900">
      <Link href={url}>
        <a className="helper-link-cover group-hover:underline text-chungking-blue-500 dark:text-chungking-turquoise-500">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default LinkListItem;
