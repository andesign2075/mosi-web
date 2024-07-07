import { COLORS } from '@/utils/theme';
import React from 'react';
const MypageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.fill ? 'current' : COLORS.GRAY[600]}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1854 19.0971C21.0721 17.3191 22.25 14.7971 22.25 12C22.25 6.61522 17.8848 2.25 12.5 2.25C7.11522 2.25 2.75 6.61522 2.75 12C2.75 14.7971 3.92785 17.3191 5.81463 19.0971C7.56012 20.7419 9.91234 21.75 12.5 21.75C15.0877 21.75 17.4399 20.7419 19.1854 19.0971ZM6.64512 17.8123C8.01961 16.0978 10.1316 15 12.5 15C14.8684 15 16.9804 16.0978 18.3549 17.8123C16.8603 19.3178 14.789 20.25 12.5 20.25C10.211 20.25 8.13973 19.3178 6.64512 17.8123ZM16.25 9C16.25 11.0711 14.5711 12.75 12.5 12.75C10.4289 12.75 8.75 11.0711 8.75 9C8.75 6.92893 10.4289 5.25 12.5 5.25C14.5711 5.25 16.25 6.92893 16.25 9Z"
    />
  </svg>
);

export default MypageIcon;
