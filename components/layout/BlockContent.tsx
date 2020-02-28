import styled from 'styled-components'

interface BlockContentProps {
  mainWindow?: boolean
}

const BlockContent = styled('section')<BlockContentProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  ${props => props.mainWindow && 'align-items: center;'}
  width: 100%;
  margin: 0;
  padding: ${props => (props.mainWindow ? '8px' : '32px 16px')};
  font-size: 24px;

  h1 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 36px;
    line-height: 1.15;
    font-weight: 300;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 72px;
    line-height: 1.15;
    font-weight: 600;
  }

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
