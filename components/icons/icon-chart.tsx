import * as React from 'react';

export const IconChart: React.FC<React.SVGAttributes<SVGSVGElement>> = props => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.21 20H1.054A1.053 1.053 0 010 18.947v-8.42a1.053 1.053 0 011.053-1.053H4.21a1.053 1.053 0 011.052 1.052v8.421A1.053 1.053 0 014.211 20zm7.369 0H8.42a1.053 1.053 0 01-1.053-1.053V1.053A1.053 1.053 0 018.421 0h3.158a1.053 1.053 0 011.053 1.053v17.894A1.053 1.053 0 0111.579 20zm7.368 0H15.79a1.053 1.053 0 01-1.053-1.053V7.368a1.052 1.052 0 011.053-1.052h3.157A1.053 1.053 0 0120 7.368v11.58A1.053 1.053 0 0118.947 20z"
        fill="currentColor"
      />
    </svg>
  );
};
