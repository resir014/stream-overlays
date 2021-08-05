import { css } from '@emotion/react';

const topoPattern = css`
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.2;
    background-image: url('/static/topography.svg');
  }
`;

export default topoPattern;
