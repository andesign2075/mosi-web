import { COLORS } from '@/utils/theme';
import React from 'react';
const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.79292 0.292893C8.18345 -0.0976311 8.81661 -0.0976311 9.20714 0.292893L16.2071 7.29289C16.4931 7.57889 16.5787 8.00901 16.4239 8.38268C16.2691 8.75636 15.9045 9 15.5 9H14.5V15C14.5 15.5523 14.0523 16 13.5 16H11.5C10.9477 16 10.5 15.5523 10.5 15V12C10.5 11.4477 10.0523 11 9.50003 11H7.50003C6.94774 11 6.50003 11.4477 6.50003 12V15C6.50003 15.5523 6.05231 16 5.50003 16H3.50003C2.94774 16 2.50003 15.5523 2.50003 15V9H1.50003C1.09557 9 0.730931 8.75636 0.57615 8.38268C0.421369 8.00901 0.506924 7.57889 0.792922 7.29289L7.79292 0.292893Z"
      fill={props.fill ? 'current' : COLORS.GRAY[600]}
    />
  </svg>
);

export default HomeIcon;
