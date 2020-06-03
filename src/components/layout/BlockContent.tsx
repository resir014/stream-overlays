import styled from '@emotion/styled'

const BlockContent = styled('section')`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 0;
  font-size: 24px;

  p {
    margin: 8px 0;
    font-size: 28px;
    line-height: 1.5;

    strong {
      display: inline;
      line-height: 1;
    }
  }
`

export default BlockContent
