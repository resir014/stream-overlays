import { css } from '@emotion/react'
import { Box, BoxProps, Text } from '@resir014/chungking-react'
import * as React from 'react'

interface AlertToastProps extends BoxProps {
  title: string
  recipient?: string
  content: string
}

const AlertToast: React.FC<AlertToastProps> = ({ title, recipient, content, ...rest }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height={56}
      backgroundColor="white"
      color="black"
      {...rest}
    >
      <Box display="flex" alignItems="center" height={56} pl={48} pr={24}>
        <Text variant={700} fontWeight={700}>
          {title}
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        height={56}
        flex="1 1 auto"
        pl={24}
        pr={48}
        css={css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          > *:not(:first-of-type) {
            margin-left: 48px;
          }
        `}
      >
        {recipient && <Text variant={700}>{recipient}</Text>}
        <Text variant={700}>{content}</Text>
      </Box>
    </Box>
  )
}

export default AlertToast
