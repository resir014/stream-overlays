export interface LinkListItemProps {
  title: string;
  url: string;
}

export function LinkListItem({ url, title }: LinkListItemProps) {
  return (
    <li className="group relative p-4 border rounded-lg hover:shadow-md border-chungking-grey-100 hover:bg-chungking-grey-100 dark:border-chungking-grey-900 dark:hover:bg-chungking-grey-900">
      <a
        href={url}
        className="helper-link-cover group-hover:underline text-chungking-blue-500 dark:text-chungking-turquoise-500"
      >
        {title}
      </a>
    </li>
  );
}
