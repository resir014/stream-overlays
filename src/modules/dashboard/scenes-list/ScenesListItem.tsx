import { css } from '@emotion/react'
import { Anchor, Box, BoxProps } from '@resir014/chungking-react'
import Link from 'next/link'
import * as React from 'react'
import { ListItem } from '../types'

interface ScenesListItemProps extends BoxProps {
  scene: ListItem
}

const ScenesListItem: React.FC<ScenesListItemProps> = ({ scene, ...rest }) => {
  return (
    <Box
      position="relative"
      p="md"
      border="1px solid"
      borderColor="grey.900"
      borderRadius={6}
      _hover={{ backgroundColor: 'grey.900', boxShadow: 'single' }}
      _focusWithin={{ backgroundColor: 'grey.900', boxShadow: 'single' }}
      {...rest}
    >
      <Link href={scene.url} passHref>
        <Anchor
          css={css`
            &::after {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
            }
          `}
        >
          {scene.title}
        </Anchor>
      </Link>
    </Box>
  )
}

export default ScenesListItem
