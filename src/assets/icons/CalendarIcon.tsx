import COLORS from '@/styles/ui/_theme.module.scss';
import React from 'react';

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.fill ? 'current' : COLORS.GRAY_600}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 2C4.77614 2 5 2.22386 5 2.5V3.5H11V2.5C11 2.22386 11.2239 2 11.5 2C11.7761 2 12 2.22386 12 2.5V3.5H12.5C13.6046 3.5 14.5 4.39543 14.5 5.5V13C14.5 14.1046 13.6046 15 12.5 15H3.5C2.39543 15 1.5 14.1046 1.5 13V5.5C1.5 4.39543 2.39543 3.5 3.5 3.5H4V2.5C4 2.22386 4.22386 2 4.5 2ZM13.5 8C13.5 7.44772 13.0523 7 12.5 7H3.5C2.94772 7 2.5 7.44772 2.5 8V13C2.5 13.5523 2.94772 14 3.5 14H12.5C13.0523 14 13.5 13.5523 13.5 13V8Z"
    />
  </svg>
);

export default CalendarIcon;
