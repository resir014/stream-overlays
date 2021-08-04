import Link from 'next/link'
import * as React from 'react'
import { ListItem } from '../types'

interface ScenesListItemProps {
  scene: ListItem
}

const ScenesListItem: React.FC<ScenesListItemProps> = ({ scene }) => {
  return (
    <div className="group relative p-4 border rounded-lg hover:shadow-md border-chungking-grey-100 hover:bg-chungking-grey-100 dark:border-chungking-grey-900 dark:hover:bg-chungking-grey-900">
      <Link href={scene.url}>
        <a className="helper-link-cover group-hover:underline text-chungking-blue-500 dark:text-chungking-turquoise-500">
          {scene.title}
        </a>
      </Link>
    </div>
  )
}

export default ScenesListItem
