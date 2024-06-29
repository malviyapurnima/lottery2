import React from 'react';

const ContactIcon = ({ width = 24, height = 24, fill = "#0B3447", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color={fill}><rect width="17.5" height="20" x="4" y="2" rx="4"/>
    <path d="M10.59 13.74c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0M15 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 6H2.5M5 12H2.5M5 18H2.5"/>
    </g>
  </svg>
);

export default ContactIcon;
