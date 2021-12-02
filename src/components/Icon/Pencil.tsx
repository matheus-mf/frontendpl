import React from 'react';
import { IIconParams } from './types';

export const Pencil: React.FC<IIconParams> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14.451 14.451"
  >
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.232,3.767a1.741,1.741,0,1,1,2.462,2.462L6.385,14.538,3,15.461l.923-3.385Z"
      transform="matrix(0.996, -0.087, 0.087, 0.996, -2.719, -1.231)"
    />
  </svg>
);
