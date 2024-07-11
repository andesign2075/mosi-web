import COLORS from '@/styles/ui/_theme.module.scss';
import React from 'react';

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.00022 4.5C5.00022 2.84315 6.34337 1.5 8.00022 1.5C9.65708 1.5 11.0002 2.84315 11.0002 4.5C11.0002 6.15685 9.65708 7.5 8.00022 7.5C6.34337 7.5 5.00022 6.15685 5.00022 4.5Z"
      fill="#414141"
    />
    <path
      fill={props.fill ? 'current' : COLORS.GRAY_600}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.50105 13.9036C2.55261 10.9104 4.99488 8.5 8.00022 8.5C11.0056 8.5 13.4479 10.9105 13.4994 13.9038C13.5028 14.1023 13.3884 14.284 13.208 14.3668C11.622 15.0945 9.8579 15.5 8.00043 15.5C6.14279 15.5 4.37851 15.0945 2.79244 14.3666C2.61199 14.2838 2.49763 14.1021 2.50105 13.9036Z"
    />
  </svg>
);

export default UserIcon;
