import styled from 'styled-components'
import { fonts } from '../../styles/variables'

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
    margin-bottom: 16px;
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
    text-transform: lowercase;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 32px;
    font-size: 72px;
    line-height: 80px;
    font-weight: 600;
  }

  p {
    margin: 8px 0;
    font-family: ${fonts.serif};
    font-size: 28px;
    line-height: 36px;

    strong {
      display: inline;
      line-height: 1;
    }
  }
`

export default BlockContent
