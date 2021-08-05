import { css } from '@emotion/react';
import { theme } from '@resir014/chungking-react';

const dashboardGlobalStyles = css`
  a {
    text-decoration: none;
    color: ${theme.colors.white};
    border-bottom: 2px solid ${theme.colors.white};
    border-top: 2px solid transparent;
  }

  a:hover,
  a:focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.grey[900]};
    border-top-color: ${theme.colors.white};
  }
`;

export default dashboardGlobalStyles;
