import * as React from 'react';

export const IconExclamationMark: React.FC<React.SVGAttributes<SVGSVGElement>> = props => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 003 21h18a.997.997 0 00.883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z"
        fill="currentColor"
      />
    </svg>
  );
};
