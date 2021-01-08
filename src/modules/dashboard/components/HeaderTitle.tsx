import { css } from '@emotion/react'
import * as React from 'react'
import { Text } from '@resir014/chungking-react'

const HeaderTitle: React.FC = ({ children }) => {
  return (
    <Text
      as="h2"
      m={0}
      fontSize="36px"
      lineHeight="42px"
      variant={700}
      fontWeight={600}
      css={css`
        &:not(:first-child) {
          margin-top: 24px;
        }
      `}
    >
      {children}
    </Text>
  )
}

export default HeaderTitle
