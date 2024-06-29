import React from 'react';

const PoolsIcon = ({ width = 22, height = 19, fill = "white", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="mask0_748_2190" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="19">
        <path d="M3.5 6L16 1L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 6H21V9C19.5 9 18 10 18 11.75C18 13.5 19.5 15 21 15V18H1V15C2.5 15 4 14 4 12C4 10 2.5 9 1 9V6Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 10.6924H10.5M7.5 13.6924H14.5" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      </mask>
      <g mask="url(#mask0_748_2190)">
        <path d="M-1 -2H23V22H-1V-2Z" fill={fill}/>
      </g>
  </svg>
);

export default PoolsIcon;