import COLORS from '@/styles/ui/_theme.module.scss';
import React from 'react';

const PlusCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14 11V18M17.5 14.5H10.5M24.5 14.5C24.5 20.299 19.799 25 14 25C8.20101 25 3.5 20.299 3.5 14.5C3.5 8.70101 8.20101 4 14 4C19.799 4 24.5 8.70101 24.5 14.5Z"
      stroke={props.fill ? 'current' : COLORS.GRAY_600}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlusCircleIcon;
