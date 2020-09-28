import { css } from '@emotion/core'
import * as React from 'react'
import { Text } from '~/components/chungking-core'

const HeaderParagraph: React.FC = ({ children }) => {
  return (
    <Text
      as="p"
      my="xs"
      mx={0}
      fontSize="24px"
      lineHeight="32px"
      css={css`
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      {children}
    </Text>
  )
}

export default HeaderParagraph
