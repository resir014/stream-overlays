export interface LinkListItemProps {
  title: string;
  url: string;
}

export function LinkListItem({ url, title }: LinkListItemProps) {
  return (
    <li className="group relative rounded-lg border border-chungking-grey-100 p-4 hover:bg-chungking-grey-100 hover:shadow-md dark:border-chungking-grey-900 dark:hover:bg-chungking-grey-900">
      <a
        href={url}
        className="helper-link-cover text-chungking-blue-500 group-hover:underline dark:text-chungking-turquoise-500"
      >
        {title}
      </a>
    </li>
  );
}
