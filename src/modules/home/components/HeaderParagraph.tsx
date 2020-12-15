import { css } from '@emotion/react'
import { Text } from '@resir014/chungking-react'
import * as React from 'react'

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
