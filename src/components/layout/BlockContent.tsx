import styled from '@emotion/styled'

const BlockContent = styled('section')`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 0;
`

export const BlockParagraph = styled('p')`
  margin: 0 0 8px;
  font-size: 28px;
  line-height: 1.5;

  &:last-of-type {
    margin-bottom: 0;
  }

  strong {
    display: inline;
    line-height: 1;
  }
`

export default BlockContent
